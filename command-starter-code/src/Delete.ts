import { CommandInterface } from "./CommandInterface";
import { IDocument } from "./document/IDocument";

export class Delete implements CommandInterface {
  private document: IDocument;
  private index: number;
  private deletedText: string;

  constructor(document: IDocument, index: number, length: number) {
    this.document = document;
    this.index = index;
    this.deletedText = document.getContents().substring(index, index + length)
  }

  public do(): void {
    if (this.document.delete(this.index, this.deletedText.length) == null) {
        console.log("Deletion unsuccessful");
    }
  }

  public undo(): void {
      this.document.insert(this.index, this.deletedText);
  }
}
