import CaseSwapperFactory from "../CaseSwapperFactory";
import TextCase from "../TextCase";
import UppercaseSwapper from "../UppercaseSwapper";
import LowercaseSwapper from "../LowercaseSwapper";

describe("CaseSwapperFactory", () => {
  describe("getCaseSwapper", () => {
    it("with 'TextCase.Uppercase' returns UppercaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(TextCase.Upper)).toBeInstanceOf(UppercaseSwapper);
    });

    it("with 'TextCase.Lowercase' returns LowercaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(TextCase.Lower)).toBeInstanceOf(LowercaseSwapper);
    });
  });
});
