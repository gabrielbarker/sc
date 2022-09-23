import TextCase from "./TextCase";
import * as swapper from "./swapper";

class CaseSwapperFactory {
  private static CASE_SWAPPERS_BY_TEXT_CASE = {
    [TextCase.Upper]: new swapper.UppercaseSwapper(),
    [TextCase.Lower]: new swapper.LowercaseSwapper(),
    [TextCase.Title]: new swapper.TitleCaseSwapper(),
    [TextCase.Camel]: new swapper.CamelCaseSwapper(),
    [TextCase.Constant]: new swapper.ConstantCaseSwapper(),
    [TextCase.Dot]: new swapper.DotCaseSwapper(),
    [TextCase.Kebab]: new swapper.KebabCaseSwapper(),
    [TextCase.Pascal]: new swapper.PascalCaseSwapper(),
    [TextCase.Path]: new swapper.PathCaseSwapper(),
    [TextCase.Sentence]: new swapper.SentenceCaseSwapper(),
    [TextCase.Snake]: new swapper.SnakeCaseSwapper(),
    [TextCase.Invert]: new swapper.InvertCaseSwapper(),
  };

  public getCaseSwapper(textCase: TextCase): swapper.CaseSwapper {
    return CaseSwapperFactory.CASE_SWAPPERS_BY_TEXT_CASE[textCase];
  }
}

export default CaseSwapperFactory;
