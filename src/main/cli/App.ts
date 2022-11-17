import Parameters from "./Parameters";
import { CaseSwapperFactory } from "../case";
import Display from "../display";
import fs from "fs";

class App {
  private display = new Display();

  public swap(text: string, parameters: Parameters): void {
    text = text || this.getStandardInput().trim();
    const swapped = new CaseSwapperFactory().getCaseSwapper(parameters.case).swap(text);
    this.display.print(swapped);
  }

  private getStandardInput(): string {
    try {
      return fs.readFileSync(process.stdin.fd, "utf-8");
    } catch (err) {
      this.display.print("supply valid text");
      process.exit(1);
    }
  }
}

export default App;
