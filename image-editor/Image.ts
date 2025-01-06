import { Color } from './Color';
export class Image {
    private pixels: Color[][];

    constructor(width: number, height: number) {
        this.pixels = Array.from({ length: width }, () => Array.from({length: height}, () => new Color()));
    }

    public getWidth(): number {
        return this.pixels.length;
    }

    public getHeight(): number {
        return this.pixels[0].length;
    }

    public set(x: number, y: number, c: Color): void {
        this.pixels[x][y] = c;
    }

    public get(x: number, y: number): Color {
        return this.pixels[x][y]
    }
}