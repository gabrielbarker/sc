import CaseSwapper from "./CaseSwapper";
import TextCase from "./TextCase";
import UppercaseSwapper from "./UppercaseSwapper";
import LowercaseSwapper from "./LowercaseSwapper";
import TitleCaseSwapper from "./TitleCaseSwapper";
import CamelCaseSwapper from "./CamelCaseSwapper";
import ConstantCaseSwapper from "./ConstantCaseSwapper";
import DotCaseSwapper from "./DotCaseSwapper";
import KebabCaseSwapper from "./KebabCaseSwapper";

class CaseSwapperFactory {
  private static CASE_SWAPPERS_BY_TEXT_CASE = {
    [TextCase.Upper]: new UppercaseSwapper(),
    [TextCase.Lower]: new LowercaseSwapper(),
    [TextCase.Title]: new TitleCaseSwapper(),
    [TextCase.Camel]: new CamelCaseSwapper(),
    [TextCase.Constant]: new ConstantCaseSwapper(),
    [TextCase.Dot]: new DotCaseSwapper(),
    [TextCase.Kebab]: new KebabCaseSwapper(),
  };

  public getCaseSwapper(textCase: TextCase): CaseSwapper {
    return CaseSwapperFactory.CASE_SWAPPERS_BY_TEXT_CASE[textCase];
  }
}

export default CaseSwapperFactory;
