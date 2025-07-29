import { DB } from "mongoloquent";

export const MONGOLOQUENT_MODULE = "MONGOLOQUENT_MODULE";
export const MONGOLOQUENT_DB = "MONGOLOQUENT_DB";

export function getMongoloquentModuleToken(name: string = "default"): string {
  return `${MONGOLOQUENT_MODULE}_${name}`;
}

export function getMongoloquentDBToken(moduleName: string = "default"): string {
  return `${MONGOLOQUENT_DB}_${moduleName}`;
}

export function getDynamicDB(): typeof DB {
  return class DynamicDB extends DB<any> {};
}
