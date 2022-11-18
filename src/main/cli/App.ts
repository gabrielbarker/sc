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
    const swapped = new CaseSwapperFactory().getCaseSwapper(parameters.case).swap(text);
    App.display.print(swapped);
  }
}

export default App;
