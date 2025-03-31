import { CommandInterface } from "./CommandInterface";
import { IDocument } from "./document/IDocument";

export class Replace implements CommandInterface {
  private document: IDocument;
  private index: number;
  private newText: string;
  private oldText: string;

  constructor(document: IDocument, index: number, newText: string, length: number) {
    this.document = document;
    this.index = index;
    this.newText = newText;
    this.oldText = document.getContents().substring(index, index + length);
  }

  public do(): void {
      this.document.delete(this.index, this.oldText.length);
      this.document.insert(this.index, this.newText);
  }

  public undo(): void {
    this.document.delete(this.index, this.newText.length);
    this.document.insert(this.index, this.oldText);
  }
}
