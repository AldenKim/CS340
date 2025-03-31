import { CommandInterface } from "./CommandInterface";
import { IDocument } from "./document/IDocument";

export class Start implements CommandInterface {
  private document: IDocument;
  private oldText: string;

  constructor(document: IDocument, oldText: string) {
    this.document = document;
    this.oldText = oldText;
  }

  do(): void {
    this.document.clear();
  }

  undo(): void {
    this.document.insert(0, this.oldText);
  }
}
