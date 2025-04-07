import { StringSource } from "./StringSource";

export class AddSpaceDecorator implements StringSource {
  private source: StringSource;

  constructor(source: StringSource) {
    this.source = source;
  }

  next(): string {
    let temp = this.source.next()
    let returnVal = "";

    for(const character of temp) {
      returnVal += character + " ";
    }

    return returnVal;
  }
}