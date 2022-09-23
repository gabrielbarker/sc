import CaseSwapperFactory from "../CaseSwapperFactory";
import TextCase from "../TextCase";
import * as swapper from "../swapper";

describe("CaseSwapperFactory", () => {
  describe("getCaseSwapper", () => {
    it("with 'TextCase.Uppercase' returns UppercaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(TextCase.Upper)).toBeInstanceOf(swapper.UppercaseSwapper);
    });

    it("with 'TextCase.Lowercase' returns LowercaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(TextCase.Lower)).toBeInstanceOf(swapper.LowercaseSwapper);
    });
  });
});
