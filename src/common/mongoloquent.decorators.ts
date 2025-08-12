import { createParamDecorator, ExecutionContext, Inject, SetMetadata } from "@nestjs/common";
import { IMongoloquentModelClass } from "../interfaces";
import { getMongoloquentDBToken, MONGOLOQUENT_TRANSACTIONAL } from "./mongoloquent.utils";

export const InjectModel = (model: IMongoloquentModelClass) => Inject(model);

export const InjectDB = (moduleName: string = "default") =>
  Inject(getMongoloquentDBToken(moduleName));

export const Transactional = () => SetMetadata(MONGOLOQUENT_TRANSACTIONAL, true);

export const Session = createParamDecorator((_: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.mongoloquentSession;
});
