import CaseSwapper from "./CaseSwapper";

class InvertCaseSwapper implements CaseSwapper {
  public swap(text: string): string {
    return text
      .split("")
      .map((c) => (c.toLowerCase() == c ? c.toUpperCase() : c.toLowerCase()))
      .join("");
  }
}

export default InvertCaseSwapper;
