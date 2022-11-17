import CommandFactory from "./CommandFactory";

class CLI {
  private factory = new CommandFactory();

  public run(args: string[]): void {
    const program = this.factory.createCommand();
    program.parse(args);
  }
}

export default CLI;
