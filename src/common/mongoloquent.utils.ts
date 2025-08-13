import { DB } from "mongoloquent";
import { AsyncContextService } from "../services";
import { MONGOLOQUENT_DB, MONGOLOQUENT_MODULE } from "../types";

export function getMongoloquentModuleToken(connectionName: string = "default"): string {
  return `${MONGOLOQUENT_MODULE}_${connectionName}`;
}

export function getMongoloquentDBToken(connectionName: string = "default"): string {
  return `${MONGOLOQUENT_DB}_${connectionName}`;
}

export function getDynamicDB(): typeof DB {
  return class DynamicDB extends DB<any> {
    static getSession() {
      return AsyncContextService.get("session");
    }
  };
}
