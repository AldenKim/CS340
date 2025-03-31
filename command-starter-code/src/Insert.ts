import { CommandInterface } from "./CommandInterface";
import { IDocument } from "./document/IDocument";

export class Insert implements CommandInterface {
  private document: IDocument;
  private index: number;
  private text: string;

  constructor(document: IDocument, index: number, text: string) {
    this.document = document;
    this.index = index;
    this.text = text;
  }

  public do(): void {
    this.document.insert(this.index, this.text);
  }

  public undo(): void {
    this.document.delete(this.index, this.text.length);
  }
}
