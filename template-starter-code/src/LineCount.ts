import * as fs from "fs";
import { BaseClass } from "./BaseClass";

class LineCount extends BaseClass {
  private totalLineCount: number = 0;

  public static main(): void {
    let lineCount: LineCount;

    if (process.argv.length === 4) {
      lineCount = new LineCount(process.argv[2], process.argv[3]);
    } else if (process.argv.length === 5 && process.argv[2].match("-r")) {
      lineCount = new LineCount(process.argv[3], process.argv[4], true);
    } else {
      this.usage();
      return;
    }

    lineCount.run();
  }

  private static usage(): void {
    console.log(
      "USAGE: npx ts-node src/LineCount.ts {-r} <dir> <file-pattern>"
    );
  }

  private constructor(
    dirName: string,
    filePattern: string,
    recurse: boolean = false
  ) {
    super(dirName, filePattern, recurse);
  }

  protected printMessage(): void {
    console.log(`TOTAL LINES: ${this.totalLineCount}`);
  }

  protected printResult(currentLineCount: number, filePath: string): void {
    console.log(`${currentLineCount} ${filePath}`);
  }

  protected countProcess(currentLineCount: number,  lines: string[]): number {
      currentLineCount = lines.length;
      this.totalLineCount += currentLineCount;
      return currentLineCount;
  }
}

LineCount.main();
