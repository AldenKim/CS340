import { StringSource } from "./StringSource";

export class ReverseDecorator implements StringSource {
  private stringSource: StringSource;

  public constructor(stringSource: StringSource) {
    this.stringSource = stringSource;
  }

  next(): string {
    return this.stringSource.next().split("").reverse().join("");
  }
}
