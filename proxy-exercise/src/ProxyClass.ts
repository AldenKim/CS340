import { Array2DImplementation } from "./Array2DImplemtation";
import { Array2D } from "./Array2DInterface";

export class Array2DProxy implements Array2D {
    private real: Array2DImplementation | null = null;
    private fileName: string;

    public constructor(fileName: string) {
        this.fileName = fileName;
    }

    private loadObject(): void {
        if(!this.real) {
            this.real = new Array2DImplementation(undefined, undefined, this.fileName);
        }
    }

    public set(row: number, col: number, value: number) {
        this.loadObject();
        this.real!.set(row, col, value);
    }

    public get(row: number, col: number) {
        this.loadObject();
        return this.real!.get(row, col);
    }
}
