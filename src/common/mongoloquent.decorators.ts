import { Inject } from "@nestjs/common";
import { IMongoloquentModelClass } from "../interfaces";
import { getMongoloquentDBToken } from "./mongoloquent.utils";

export const InjectModel = (model: IMongoloquentModelClass) => Inject(model);
export const InjectDB = (moduleName: string = "default") =>
  Inject(getMongoloquentDBToken(moduleName));
