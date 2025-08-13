import { Inject } from "@nestjs/common";
import { IMongoloquentModelClass } from "../types";

export const InjectModel = (model: IMongoloquentModelClass) => Inject(model);
