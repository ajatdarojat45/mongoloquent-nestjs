import { ModuleMetadata } from "@nestjs/common";
import { Model } from "mongoloquent";

export type IMongoloquentModelClass<T = any> = new (...args: any[]) => Model<T>;

export interface IMongoloquentModuleOptions {
  name?: string;
  connection: string;
  database: string;
  models?: IMongoloquentModelClass<any>[];
  timezone?: string;
  global?: boolean;
}

export interface IMongoloquentModuleAsyncOptions extends Pick<ModuleMetadata, "imports"> {
  name?: string;
  models?: IMongoloquentModelClass<any>[];
  useFactory: (
    ...args: any[]
  ) =>
    | Promise<Pick<IMongoloquentModuleOptions, "connection" | "database" | "timezone">>
    | Pick<IMongoloquentModuleOptions, "connection" | "database" | "timezone">;
  global?: boolean;
  inject?: any[];
}
