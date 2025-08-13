import { Inject } from "@nestjs/common";
import { getMongoloquentDBToken } from "../common";

export const InjectDB = (moduleName: string = "default") =>
  Inject(getMongoloquentDBToken(moduleName));
