import { StringSource } from "./StringSource";

export class LyricsStringSource implements StringSource {
    private i = 0;
    private lyrics = "Don't smile because it happened, baby, cry because it's over Oh, you're supposed to think about me every time you hold her";

    public next(): string {
        if (this.i < this.lyrics.length) {
            const next = this.lyrics.split(" ")[this.i];
            this.i++;
            return next;
        }
        return "";
    }
}