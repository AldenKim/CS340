import { CommandInterface } from "./CommandInterface";

export class UndoRedoManager {
  private redoStack: CommandInterface[] = [];
  private undoStack: CommandInterface[] = [];

  public executeCommand(command: CommandInterface): void {
    command.do();
    this.undoStack.push(command);
    this.redoStack = [];
  }

  public redo(): void {
    if (this.canRedo()) {
      let command: CommandInterface = this.redoStack.pop()!;
      command.do();
      this.undoStack.push(command);
    } else {
        console.log("No more to redo")
    }
  }

  public undo(): void {
    if (this.canUndo()) {
        let command: CommandInterface = this.undoStack.pop()!;
        command.undo();
        this.redoStack.push(command);
    } else {
        console.log("No more to undo");
    }
  }

  public canRedo() {
    return this.redoStack.length > 0;
  }

  public canUndo() {
    return this.undoStack.length > 0;
  }
}
