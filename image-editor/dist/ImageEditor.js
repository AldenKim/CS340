"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = require("./Color");
const Image_1 = require("./Image");
const fs = __importStar(require("fs"));
class ImageEditor {
    static main() {
        const args = process.argv.slice(2);
        new ImageEditor().run(args);
    }
    constructor() {
        return;
    }
    run(args) {
        try {
            if (args.length < 3) {
                this.usage();
                return;
            }
            const [inputFile, outputFile, filter] = args;
            let image = this.read(inputFile);
            if (filter === "grayscale" || filter === ("greyscale")) {
                if (args.length !== 3) {
                    this.usage();
                    return;
                }
                this.grayscale(image);
            }
            else if (filter === "invert") {
                if (args.length !== 3) {
                    this.usage();
                    return;
                }
                this.invert(image);
            }
            else if (filter === "emboss") {
                if (args.length !== 3) {
                    this.usage();
                    return;
                }
                this.emboss(image);
            }
            else if (filter === "motionblur") {
                if (args.length !== 4) {
                    this.usage();
                    return;
                }
                let length = -1;
                try {
                    length = Number(args[3]);
                }
                catch (error) {
                    //ignore
                }
                if (length < 0) {
                    this.usage();
                    return;
                }
                this.motionblur(image, length);
            }
            else {
                this.usage();
            }
            this.write(image, outputFile);
        }
        catch (error) {
            console.error("Error:", error);
        }
    }
    usage() {
        console.log("USAGE: java ImageEditor <in-file> <out-file> <grayscale|invert|emboss|motionblur> {motion-blur-length}");
    }
    motionblur(image, length) {
    }
    invert(image) {
        for (let x = 0; x < image.getWidth(); ++x) {
            for (let y = 0; y < image.getHeight(); ++y) {
                let currColor = image.get(x, y);
                currColor.red = Math.floor(255 - currColor.red);
                currColor.green = Math.floor(255 - currColor.green);
                currColor.blue = Math.floor(255 - currColor.blue);
            }
        }
    }
    grayscale(image) {
        for (let x = 0; x < image.getWidth(); ++x) {
            for (let y = 0; y < image.getHeight(); ++y) {
                let currColor = image.get(x, y);
                let grayLevel = Math.floor((currColor.red + currColor.green + currColor.blue) / 3);
                grayLevel = Math.max(0, Math.min(grayLevel, 255));
                currColor.red = grayLevel;
                currColor.green = grayLevel;
                currColor.blue = grayLevel;
            }
        }
    }
    emboss(image) {
        for (let x = image.getWidth() - 1; x >= 0; --x) {
            for (let y = image.getHeight() - 1; y >= 0; --y) {
                let currColor = image.get(x, y);
                let diff = 0;
                if (x > 0 && y > 0) {
                    let upLeftColor = image.get(x - 1, y - 1);
                    if (Math.floor(Math.abs(currColor.red - upLeftColor.red)) > Math.floor(Math.abs(diff))) {
                        diff = currColor.red - upLeftColor.red;
                    }
                    if (Math.floor(Math.abs(currColor.green - upLeftColor.green)) > Math.floor(Math.abs(diff))) {
                        diff = currColor.green - upLeftColor.green;
                    }
                    if (Math.floor(Math.abs(currColor.blue - upLeftColor.blue)) > Math.floor(Math.abs(diff))) {
                        diff = currColor.blue - upLeftColor.blue;
                    }
                }
                let grayLevel = Math.floor(128 + diff);
                grayLevel = Math.max(0, Math.min(grayLevel, 255));
                currColor.red = grayLevel;
                currColor.green = grayLevel;
                currColor.blue = grayLevel;
            }
        }
    }
    read(filePath) {
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
        image = new Image_1.Image(width, height);
        input.shift();
        let i = 0;
        for (let y = 0; y < height; ++y) {
            for (let x = 0; x < width; ++x) {
                const color = new Color_1.Color();
                color.red = Number(input[i++]);
                color.green = Number(input[i++]);
                color.blue = Number(input[i++]);
                image.set(x, y, color);
            }
        }
        return image;
    }
    write(image, filePath) {
        const openFD = fs.openSync(filePath, 'w');
        try {
            fs.writeSync(openFD, "P3\n");
            let header = image.getWidth().toString() + " " + image.getHeight().toString() + "\n";
            fs.writeSync(openFD, header);
            fs.writeSync(openFD, "255\n");
            for (let y = 0; y < image.getHeight(); ++y) {
                let row = "";
                for (let x = 0; x < image.getWidth(); ++x) {
                    const color = image.get(x, y);
                    if (x !== 0) {
                        row += " ";
                    }
                    row += color.red.toString() + " ";
                    row += color.green.toString() + " ";
                    row += color.blue.toString();
                }
                fs.writeSync(openFD, row + "\n");
            }
        }
        finally {
            fs.closeSync(openFD);
        }
    }
}
ImageEditor.main();
//# sourceMappingURL=ImageEditor.js.map