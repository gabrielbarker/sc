import { Command, Option } from "commander";
import CONSTANTS from "./constants";
import App from "./App";

class CommandFactory {
  private app = new App();

  public createCommand(): Command {
    return new Command()
      .argument(CONSTANTS.textArgumentName, CONSTANTS.textArgumentDescription)
      .addOption(this.createCaseOption())
      .action(this.app.swap);
  }

  private createCaseOption(): Option {
    return new Option(CONSTANTS.caseFlags, CONSTANTS.caseDescription)
      .choices(CONSTANTS.caseOptions)
      .makeOptionMandatory();
  }
}

export default CommandFactory;
