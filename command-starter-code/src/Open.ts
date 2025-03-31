import { CommandInterface } from "./CommandInterface";
import { IDocument } from "./document/IDocument";

export class Open implements CommandInterface {
    private document: IDocument;
    private fileName: string;
    private oldContents: string;

    public constructor(document: IDocument, fileName: string, oldContents: string) {
        this.document = document
        this.fileName = fileName;
        this.oldContents = oldContents;
    }

    do(): void {
        this.document.open(this.fileName);
    }

    undo(): void {
        this.document.clear(); 
        this.document.insert(0, this.oldContents);
    }
}