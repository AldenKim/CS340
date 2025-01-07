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
            const image = this.read(inputFile);
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
    }
    grayscale(image) {
    }
    emboss(image) {
    }
    read(filePath) {
        let image = new Image_1.Image(1, 1);
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        const lineContents = fileContents.split(/\s|\n/).filter(line => line.trim() && !line.startsWith('#'));
        console.log(fileContents);
        console.log(lineContents);
        console.log(lineContents[1]);
        console.log(lineContents[2]);
        return image;
    }
    write(image, filePath) {
    }
}
ImageEditor.main();
//# sourceMappingURL=ImageEditor.js.map