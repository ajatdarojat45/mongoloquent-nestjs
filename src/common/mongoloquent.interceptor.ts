import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { from, Observable } from "rxjs";
import { InjectDB } from "./mongoloquent.decorators";
import { DB } from "mongoloquent";
import { MONGOLOQUENT_TRANSACTIONAL } from "./mongoloquent.utils";
import { AsyncContextService } from "./async-context.service";

@Injectable()
export class TransactionInterceptor implements NestInterceptor {
  constructor(
    private readonly reflector: Reflector,
    @InjectDB() private readonly db: typeof DB,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const transaction = this.reflector.getAllAndOverride<boolean>(MONGOLOQUENT_TRANSACTIONAL, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!transaction) {
      return next.handle();
    }

    const request = context.switchToHttp().getRequest();

    return from(
      this.db.transaction(async (session) => {
        request.mongoloquentSession = session;
        return AsyncContextService.run({ session }, async () => {
          request.mongoloquentSession = session;

          return await next.handle().toPromise();
        });
      }),
    );
  }
}
