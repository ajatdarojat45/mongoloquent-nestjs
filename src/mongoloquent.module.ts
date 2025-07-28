import { DynamicModule, Module, Provider } from "@nestjs/common";
import {
  IMongoloquentModelClass,
  IMongoloquentModuleAsyncOptions,
  IMongoloquentModuleOptions,
} from "./interfaces";
import { getMongoloquentModuleToken } from "./common";
import MongoloquentError from "./common/mongoloquent.error";

@Module({})
export class MongoloquentModule {
  static forRoot(options: IMongoloquentModuleOptions): DynamicModule {
    const configProvider = {
      provide: getMongoloquentModuleToken(options.name),
      useValue: options,
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

    return {
      module: MongoloquentModule,
      global: options.global || false,
      providers: [configProvider, ...modelProviders],
      exports: [configProvider, ...modelProviders],
    };
  }

  static forRootAsync(options: IMongoloquentModuleAsyncOptions): DynamicModule {
    if (!options.useFactory) throw new MongoloquentError("useFactory is required")

    const asyncProvider: Provider = {
      provide: getMongoloquentModuleToken(options.name),
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

    const modelProviders: Provider[] = (options.models || []).map((model) => {
      return { provide: model, useValue: model };
    });

    return {
      module: MongoloquentModule,
      imports: options.imports || [],
      global: options.global || false,
      providers: [asyncProvider, ...modelProviders],
      exports: [asyncProvider, ...modelProviders],
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
