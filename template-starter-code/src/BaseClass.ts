import * as fs from "fs";
import * as path from "path";

export abstract class BaseClass {
  protected dirName: string;
  protected fileRegExp: RegExp;
  protected recurse: boolean;

  constructor(dirName: string, filePattern: string, recurse: boolean = false) {
    this.dirName = dirName;
    this.fileRegExp = new RegExp(filePattern);
    this.recurse = recurse;
  }

  public async run() {
    await this.processDirectory(this.dirName);
    this.printMessage();
  }

  private async processDirectory(filePath: string) {
    if (this.isDirectory(filePath)) {
      if (this.isReadable(filePath)) {
        const files = fs.readdirSync(filePath);

        for (let file of files) {
          const fullPath = path.join(filePath, file);
          if (this.isFile(fullPath)) {
            if (this.isReadable(fullPath)) {
              await this.fileProcess(fullPath);
            } else {
              console.log(`File ${fullPath} is unreadable`);
            }
          }
        }

        if (this.recurse) {
          for (let file of files) {
            const fullPath = path.join(filePath, file);
            if (this.isDirectory(fullPath)) {
              await this.processDirectory(fullPath);
            }
          }
        }
      }
    }
  }

  protected async fileProcess(filePath: string) {
    if (this.fileRegExp.test(filePath)) {
      let currentLineCount = 0;

      try {
        const fileContent: string = await fs.promises.readFile(
          filePath,
          "utf-8"
        );

        const lines: string[] = fileContent.split(/\r?\n/);
        currentLineCount = this.countProcess(currentLineCount, lines, filePath);
      } catch (error) {
        console.log(`File ${filePath} is unreadable`);
      } finally {
        this.printResult(currentLineCount, filePath);
      }
    }
  }

  protected abstract countProcess(currCount: number,  lines: string[], filePath?: string): number;
  protected abstract printResult(currCount: number, filePath?: string): void;
  protected abstract printMessage(): void;

  private isDirectory(path: string): boolean {
    try {
      return fs.statSync(path).isDirectory();
    } catch (error) {
      return false;
    }
  }

  private isFile(path: string): boolean {
    try {
      return fs.statSync(path).isFile();
    } catch (error) {
      return false;
    }
  }

  private isReadable(path: string): boolean {
    try {
      fs.accessSync(path, fs.constants.R_OK);
      return true;
    } catch (error) {
      return false;
    }
  }
}
