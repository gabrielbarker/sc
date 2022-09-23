import CaseSwapper from "./CaseSwapper";
import TextCase from "./TextCase";
import UppercaseSwapper from "./UppercaseSwapper";
import LowercaseSwapper from "./LowercaseSwapper";
import TitleCaseSwapper from "./TitleCaseSwapper";
import CamelCaseSwapper from "./CamelCaseSwapper";
import ConstantCaseSwapper from "./ConstantCaseSwapper";
import DotCaseSwapper from "./DotCaseSwapper";
import KebabCaseSwapper from "./KebabCaseSwapper";
import PascalCaseSwapper from "./PascalCaseSwapper";
import PathCaseSwapper from "./PathCaseSwapper";
import SentenceCaseSwapper from "./SentenceCaseSwapper";
import SnakeCaseSwapper from "./SnakeCaseSwapper";
import InvertCaseSwapper from "./InvertCaseSwapper";

class CaseSwapperFactory {
  private static CASE_SWAPPERS_BY_TEXT_CASE = {
    [TextCase.Upper]: new UppercaseSwapper(),
    [TextCase.Lower]: new LowercaseSwapper(),
    [TextCase.Title]: new TitleCaseSwapper(),
    [TextCase.Camel]: new CamelCaseSwapper(),
    [TextCase.Constant]: new ConstantCaseSwapper(),
    [TextCase.Dot]: new DotCaseSwapper(),
    [TextCase.Kebab]: new KebabCaseSwapper(),
    [TextCase.Pascal]: new PascalCaseSwapper(),
    [TextCase.Path]: new PathCaseSwapper(),
    [TextCase.Sentence]: new SentenceCaseSwapper(),
    [TextCase.Snake]: new SnakeCaseSwapper(),
    [TextCase.Invert]: new InvertCaseSwapper(),
  };

  public getCaseSwapper(textCase: TextCase): CaseSwapper {
    return CaseSwapperFactory.CASE_SWAPPERS_BY_TEXT_CASE[textCase];
  }
}

export default CaseSwapperFactory;
