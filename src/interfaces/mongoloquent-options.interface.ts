import { ModuleMetadata } from "@nestjs/common";
import { Model } from "mongoloquent";

export type IMongoloquentModelClass<T = any> = new (...args: any[]) => Model<T>;

export interface IMongoloquentModuleOptions {
  connectionUri: string;
  database: string;
  models?: IMongoloquentModelClass<any>[];
  connectionName?: string;
  timezone?: string;
  global?: boolean;
}

export interface IMongoloquentModuleAsyncOptions extends Pick<ModuleMetadata, "imports"> {
  connectionName?: string;
  models?: IMongoloquentModelClass<any>[];
  global?: boolean;
  useFactory?: (
    ...args: any[]
  ) =>
    | Promise<Pick<IMongoloquentModuleOptions, "connectionUri" | "database" | "timezone">>
    | Pick<IMongoloquentModuleOptions, "connectionUri" | "database" | "timezone">;
  inject?: any[];
}
