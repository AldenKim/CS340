"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const Color_1 = require("./Color");
class Image {
    pixels;
    constructor(width, height) {
        this.pixels = Array.from({ length: width }, () => Array.from({ length: height }, () => new Color_1.Color()));
    }
    getWidth() {
        return this.pixels.length;
    }
    getHeight() {
        return this.pixels[0].length;
    }
    set(x, y, c) {
        this.pixels[x][y] = c;
    }
    get(x, y) {
        return this.pixels[x][y];
    }
}
exports.Image = Image;
//# sourceMappingURL=Image.js.map