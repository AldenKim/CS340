import * as fs from 'fs';
import { Array2D } from "./Array2DInterface";

export class Array2DImplementation implements Array2D {
    private array2d: number[][]; 

    public constructor(rowSize?: number, colSize?: number, fileName?: string) {
        this.array2d = [];
        if (fileName) {
            try {
                this.array2d = this.load(fileName);
            } catch (err) {
                console.error("Error reading the file:", err);
            }
        } else {
            this.array2d = Array.from(Array(rowSize), () => Array(colSize).fill(0));
        }
    }

    public set(row: number, col: number, value: number) {
        this.array2d[row][col] = value;
    }

    public get(row: number, col: number) {
        return this.array2d[row][col];
    }

    public save(fileName: string) {
        const jsonArray = JSON.stringify(this.array2d);
        fs.writeFileSync(fileName, jsonArray);
    }

    public load(fileName: string): number[][] {
        const jsonData = fs.readFileSync(fileName, 'utf-8');
        const tempArray: number[][] = JSON.parse(jsonData);
        return tempArray;
    }
}
