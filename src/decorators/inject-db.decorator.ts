import { Inject } from "@nestjs/common";
import { getMongoloquentDBToken } from "../common";

export const InjectDB = (connectionName: string = "default") =>
  Inject(getMongoloquentDBToken(connectionName));
