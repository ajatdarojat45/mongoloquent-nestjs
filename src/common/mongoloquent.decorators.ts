import { Inject } from "@nestjs/common";
import { IMongoloquentModelClass } from "../interfaces";

export const InjectModel = (model: IMongoloquentModelClass) => Inject(model);
