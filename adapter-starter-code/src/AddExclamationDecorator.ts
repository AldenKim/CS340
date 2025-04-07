import { StringSource } from "./StringSource";

export class AddExclamationDecorator implements StringSource {
  private source: StringSource;

  constructor(source: StringSource) {
    this.source = source;
  }

  next(): string {
    return this.source.next() + "!";
  }
}