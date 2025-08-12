import { DynamicModule, Module, Provider } from "@nestjs/common";
import {
  IMongoloquentModelClass,
  IMongoloquentModuleAsyncOptions,
  IMongoloquentModuleOptions,
} from "./types";
import {
  getDynamicDB,
  getMongoloquentDBToken,
  getMongoloquentModuleToken,
  TransactionInterceptor,
} from "./common";
import { MongoloquentException } from "mongoloquent";
import { APP_INTERCEPTOR, Reflector } from "@nestjs/core";

@Module({})
export class MongoloquentModule {
  static isTransactionInterceptorRegistered = false;

  static forRoot(options: IMongoloquentModuleOptions): DynamicModule {
    const configProvider: Provider = {
      provide: getMongoloquentModuleToken(options.name),
      useValue: options,
    };

    const dynamicDB = getDynamicDB();
    dynamicDB.setConnection(options.connection);
    dynamicDB.setDatabaseName(options.database);
    if (options.timezone) dynamicDB.setTimezone(options.timezone);

    const dbProvider: Provider = {
      provide: getMongoloquentDBToken(options.name),
      useValue: dynamicDB,
    };

    const modelProviders = (options.models || []).map((model) => {
      (model as any)["$connection"] = options.connection;
      (model as any)["$databaseName"] = options.database;
      if (options.timezone) (model as any)["$timezone"] = options.timezone;

      return {
        provide: model,
        useValue: model,
      };
    });

    const providers: Provider[] = [configProvider, dbProvider, ...modelProviders];
    if (!this.isTransactionInterceptorRegistered) {
      providers.push(Reflector);
      providers.push({ provide: APP_INTERCEPTOR, useClass: TransactionInterceptor });
      this.isTransactionInterceptorRegistered = true;
    }

    return {
      module: MongoloquentModule,
      global: options.global || false,
      providers,
      exports: [configProvider, dbProvider, ...modelProviders],
    };
  }

  static forRootAsync(options: IMongoloquentModuleAsyncOptions): DynamicModule {
    if (!options.useFactory) throw new MongoloquentException("useFactory is required");

    const configToken = getMongoloquentModuleToken(options.name);
    const dbToken = getMongoloquentDBToken(options.name);

    const asyncProvider: Provider = {
      provide: configToken,
      useFactory: async (...deps: any[]) => {
        const opts = await options.useFactory!(...deps);
        const models = options.models || [];

        for (const model of models) {
          (model as any)["$connection"] = opts.connection;
          (model as any)["$databaseName"] = opts.database;
          if (opts.timezone) (model as any)["$timezone"] = opts.timezone;
        }

        return {
          ...opts,
          models: models,
        };
      },
      inject: options.inject || [],
    };

    const dbProvider: Provider = {
      provide: dbToken,
      inject: [configToken],
      useFactory: (opts: IMongoloquentModuleOptions) => {
        const dynamicDB = getDynamicDB();
        dynamicDB.setConnection(opts.connection);
        dynamicDB.setDatabaseName(opts.database);
        if (opts.timezone) dynamicDB.setTimezone(opts.timezone);
        return dynamicDB;
      },
    };

    const modelProviders: Provider[] = (options.models || []).map((model) => {
      return { provide: model, useValue: model };
    });

    const providers: Provider[] = [asyncProvider, dbProvider, ...modelProviders];
    if (!this.isTransactionInterceptorRegistered) {
      providers.push(Reflector);
      providers.push({ provide: APP_INTERCEPTOR, useClass: TransactionInterceptor });
      this.isTransactionInterceptorRegistered = true;
    }

    return {
      module: MongoloquentModule,
      imports: options.imports || [],
      global: options.global || false,
      providers,
      exports: [asyncProvider, dbProvider, ...modelProviders],
    };
  }

  static forFeature(models: IMongoloquentModelClass[], moduleName: string = "default") {
    const featureProviders: Provider[] = models.map((model) => {
      return {
        inject: [getMongoloquentModuleToken(moduleName)],
        provide: model,
        useFactory: (config: IMongoloquentModuleOptions) => {
          (model as any)["$connection"] = config.connection;
          (model as any)["$databaseName"] = config.database;
          (model as any)["$timezone"] = config.timezone;

          return model;
        },
      };
    });

    return {
      module: MongoloquentModule,
      providers: featureProviders,
      exports: featureProviders,
    };
  }
}
