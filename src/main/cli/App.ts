import Parameters from "./Parameters";
import { CaseSwapperFactory } from "../case";
import Display from "../display";
import fs from "fs";

class App {
  private static display: Display;

  constructor() {
    App.display = new Display();
  }

  public swap(text: string, parameters: Parameters): void {
    text = text || App.getStandardInput().trim();
    const swapped = new CaseSwapperFactory().getCaseSwapper(parameters.case).swap(text);
    App.display.print(swapped);
  }

  private static getStandardInput(): string {
    try {
      return fs.readFileSync(process.stdin.fd, "utf-8");
    } catch (err) {
      App.display.print("supply valid text");
      process.exit(1);
    }
  }
}

export default App;
