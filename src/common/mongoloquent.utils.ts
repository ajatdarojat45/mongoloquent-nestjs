export const MONGOLOQUENT_MODULE_OPTIONS = "MONGOLOQUENT_MODULE_OPTIONS";

export function getMongoloquentToken(connectionName: string = "default"): string {
  return `${MONGOLOQUENT_MODULE_OPTIONS}_${connectionName}`;
}
