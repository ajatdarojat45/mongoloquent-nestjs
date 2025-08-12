import { AsyncLocalStorage } from "async_hooks";

interface AsyncContext {
  session?: any;
}

export class AsyncContextService {
  private static readonly als = new AsyncLocalStorage<AsyncContext>();

  static run(context: AsyncContext, callback: (...args: any[]) => any) {
    return this.als.run(context, callback);
  }

  static set(key: keyof AsyncContext, value: any) {
    const store = this.als.getStore();
    if (store) {
      store[key] = value;
    }
  }

  static get<T = any>(key: keyof AsyncContext): T | undefined {
    return this.als.getStore()?.[key] as T;
  }
}
