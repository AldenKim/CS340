import { StringSource } from "./StringSource";

export class Hello implements StringSource {
    private i = 0;
    private helloString = "hello world test words for this assignment";

    public next(): string {
        if (this.i < this.helloString.length) {
            const next = this.helloString.split(" ")[this.i];
            this.i++;
            return next;
        }
        return "";
    }
}

