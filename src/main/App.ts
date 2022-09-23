import { CaseSwapperFactory, TextCase } from "./case";

class App {
  public swapCase(text: string, textCase: TextCase): string {
    return new CaseSwapperFactory().getCaseSwapper(textCase).swap(text);
  }
}

export default App;
