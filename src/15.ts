export class MyClass {
  constructor(public a: any, public b: number) {}

  add(a: any, b: number): this {
    this.a += a;
    this.b += b;

    return this;
  }
}
