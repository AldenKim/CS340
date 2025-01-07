import { Color } from './Color';
import { Image } from './Image';
import * as fs from 'fs';

class ImageEditor {

    public static main(): void {
        const args = process.argv.slice(2);
        new ImageEditor().run(args);
    }

    constructor() {
        return;
    }

    public run(args: string[]): void {
        try {
            if (args.length < 3) {
                this.usage();
                return;
            }

            const [inputFile, outputFile, filter] = args;

            const image = this.read(inputFile);
        } catch(error) {
            console.error("Error:", error);
        }
    }

    private usage(): void {
        console.log("USAGE: java ImageEditor <in-file> <out-file> <grayscale|invert|emboss|motionblur> {motion-blur-length}");
    }

    private motionblur(image: Image, length: number): void {

    }

    private invert(image: Image): void {

    }

    private grayscale(image: Image): void {

    }

    private emboss(image: Image): void {

    } 

    private read(filePath: string): Image {
        let image = null;

        const fileContents = fs.readFileSync(filePath, 'utf-8');
        const input = fileContents.split(/\s|\n/).filter(line => line.trim() && !line.startsWith('#'));

        // console.log(fileContents);
        // console.log(lineContents);
        // console.log(input[1]);
        // console.log(input[2]);

        input.shift();

        const width = Number(input.shift());
        const height = Number(input.shift()); 
        
        image = new Image(width, height);

        input.shift();
        
        let i = 0;
        for (let y = 0; y < height; ++y) {
            for (let x = 0; x < width; ++x) {
                const color = new Color();
                color.red = Number(input[i++]);
                color.green = Number(input[i++]);
                color.blue = Number(input[i++]);
                image.set(x,y,color);
            }
        }

        return image;
    }

    private write(image: Image, filePath: string): void {

    }
}

ImageEditor.main();