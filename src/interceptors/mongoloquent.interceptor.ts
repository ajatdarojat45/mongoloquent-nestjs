import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { ModuleRef, Reflector } from "@nestjs/core";
import { from, Observable } from "rxjs";
import { DB } from "mongoloquent";
import { MONGOLOQUENT_TRANSACTIONAL, MONGOLOQUENT_TRANSACTIONAL_NAME } from "../types";
import { AsyncContextService } from "../services";
import { getMongoloquentDBToken } from "../common";

@Injectable()
export class TransactionInterceptor implements NestInterceptor {
  constructor(
    private readonly reflector: Reflector,
    private readonly moduleRef: ModuleRef,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const transactional = this.reflector.getAllAndOverride<boolean>(MONGOLOQUENT_TRANSACTIONAL, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!transactional) {
      return next.handle();
    }

    const transactionalName = this.reflector.getAllAndOverride<string>(
      MONGOLOQUENT_TRANSACTIONAL_NAME,
      [context.getHandler(), context.getClass()],
    );

    const db = this.moduleRef.get<DB>(getMongoloquentDBToken(transactionalName), {
      strict: false,
    });

    const request = context.switchToHttp().getRequest();

    return from(
      db.transaction(async (session) => {
        request.mongoloquentSession = session;
        return AsyncContextService.run({ session }, async () => {
          request.mongoloquentSession = session;

          return await next.handle().toPromise();
        });
      }),
    );
  }
}
