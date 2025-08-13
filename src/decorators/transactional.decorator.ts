import { applyDecorators, SetMetadata } from "@nestjs/common";
import { MONGOLOQUENT_TRANSACTIONAL, MONGOLOQUENT_TRANSACTIONAL_NAME } from "../types";

export const Transactional = (moduleName: string = "default") => {
  return applyDecorators(
    SetMetadata(MONGOLOQUENT_TRANSACTIONAL, true),
    SetMetadata(MONGOLOQUENT_TRANSACTIONAL_NAME, moduleName),
  );
};
