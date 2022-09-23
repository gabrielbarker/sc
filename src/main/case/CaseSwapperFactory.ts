import CaseSwapper from "./CaseSwapper";
import TextCase from "./TextCase";
import UppercaseSwapper from "./UppercaseSwapper";
import LowercaseSwapper from "./LowercaseSwapper";

class CaseSwapperFactory {
  private static CASE_SWAPPERS_BY_TEXT_CASE = {
    [TextCase.Upper]: new UppercaseSwapper(),
    [TextCase.Lower]: new LowercaseSwapper(),
  };

  public getCaseSwapper(textCase: TextCase): CaseSwapper {
    return CaseSwapperFactory.CASE_SWAPPERS_BY_TEXT_CASE[textCase];
  }
}

export default CaseSwapperFactory;
