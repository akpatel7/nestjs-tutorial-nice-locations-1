export class GenericFactory {
  // eslint-disable-next-line @typescript-eslint/ban-types
  public static create<T>(className: new () => {}, plain: unknown) {
    const instance = new className();
    return Object.assign(instance, plain) as unknown as T;
  }
}
