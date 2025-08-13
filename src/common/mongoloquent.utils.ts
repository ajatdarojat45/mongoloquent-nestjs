import { DB } from "mongoloquent";
import { AsyncContextService } from "../services";
import { MONGOLOQUENT_DB, MONGOLOQUENT_MODULE } from "../types";

export function getMongoloquentModuleToken(name: string = "default"): string {
  return `${MONGOLOQUENT_MODULE}_${name}`;
}

export function getMongoloquentDBToken(moduleName: string = "default"): string {
  return `${MONGOLOQUENT_DB}_${moduleName}`;
}

export function getDynamicDB(): typeof DB {
  return class DynamicDB extends DB<any> {
    static getSession() {
      return AsyncContextService.get("session");
    }
  };
}
