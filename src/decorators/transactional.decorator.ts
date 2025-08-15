import { applyDecorators, SetMetadata } from "@nestjs/common";
import {
  MONGOLOQUENT_TRANSACTIONAL,
  MONGOLOQUENT_TRANSACTIONAL_NAME,
  MONGOLOQUENT_TRANSACTIONAL_RETRIES,
} from "../types";

export const Transactional = (connectionName: string = "default", retries: number = 1) => {
  return applyDecorators(
    SetMetadata(MONGOLOQUENT_TRANSACTIONAL, true),
    SetMetadata(MONGOLOQUENT_TRANSACTIONAL_NAME, connectionName),
    SetMetadata(MONGOLOQUENT_TRANSACTIONAL_RETRIES, retries),
  );
};
