import TextCase from "./TextCase";

class App {
  public swapCase(text: string, textCase: TextCase): string {
    switch (textCase) {
      case TextCase.Upper:
        return text.toUpperCase();
      default:
        return text;
    }
  }
}

export default App;
