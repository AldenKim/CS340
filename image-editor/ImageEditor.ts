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
        let image = new Image(1,1);

        const fileContents = fs.readFileSync(filePath, 'utf-8');
        console.log(fileContents);

        return image;
    }

    private write(image: Image, filePath: string): void {

    }
}

ImageEditor.main();