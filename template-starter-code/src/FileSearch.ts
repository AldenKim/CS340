import * as fs from "fs";
import { BaseClass } from "./BaseClass";

class FileSearch extends BaseClass {
  private searchRegExp: RegExp;

  private totalMatches: number = 0;

  public static main(): void {
    let fileSearch: FileSearch;

    if (process.argv.length === 5) {
      fileSearch = new FileSearch(
        process.argv[2],
        process.argv[3],
        process.argv[4]
      );
    } else if (process.argv.length === 6 && process.argv[2].match("-r")) {
      fileSearch = new FileSearch(
        process.argv[3],
        process.argv[4],
        process.argv[5],
        true
      );
    } else {
      this.usage();
      return;
    }

    fileSearch.run();
  }

  private static usage(): void {
    console.log(
      "USAGE: npx ts-node src/FileSearch.ts {-r} <dir> <file-pattern> <search-pattern>"
    );
  }

  private constructor(
    dirName: string,
    filePattern: string,
    searchPattern: string,
    recurse: boolean = false
  ) {
    super(dirName, filePattern, recurse);
    this.searchRegExp = new RegExp(searchPattern);
  }

  protected printMessage(): void {
    console.log();
    console.log(`TOTAL MATCHES: ${this.totalMatches}`);
  }

  protected printResult(currCount: number): void {
    console.log(`MATCHES: ${currCount}`);
  }

  protected countProcess(currCount: number, lines: string[], filePath: string): number {
    lines.forEach((line) => {
      if (this.searchRegExp.test(line)) {
        if (++currCount == 1) {
          console.log();
          console.log(`FILE: ${filePath}`);
        }

        console.log(line);
        this.totalMatches++;
      }
    });

    return currCount;
  }
}

FileSearch.main();
