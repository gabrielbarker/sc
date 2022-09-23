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

    it("with 'TextCase.TitleCase' returns TitleCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(TextCase.Title)).toBeInstanceOf(swapper.TitleCaseSwapper);
    });

    it("with 'TextCase.CamelCase' returns CamelCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(TextCase.Camel)).toBeInstanceOf(swapper.CamelCaseSwapper);
    });

    it("with 'TextCase.ConstantCase' returns ConstantCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(TextCase.Constant)).toBeInstanceOf(swapper.ConstantCaseSwapper);
    });

    it("with 'TextCase.DotCase' returns DotCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(TextCase.Dot)).toBeInstanceOf(swapper.DotCaseSwapper);
    });

    it("with 'TextCase.KebabCase' returns KebabCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(TextCase.Kebab)).toBeInstanceOf(swapper.KebabCaseSwapper);
    });

    it("with 'TextCase.PascalCase' returns PascalCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(TextCase.Pascal)).toBeInstanceOf(swapper.PascalCaseSwapper);
    });

    it("with 'TextCase.PathCase' returns PathCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(TextCase.Path)).toBeInstanceOf(swapper.PathCaseSwapper);
    });

    it("with 'TextCase.SentenceCase' returns SentenceCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(TextCase.Sentence)).toBeInstanceOf(swapper.SentenceCaseSwapper);
    });

    it("with 'TextCase.SnakeCase' returns SnakeCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(TextCase.Snake)).toBeInstanceOf(swapper.SnakeCaseSwapper);
    });

    it("with 'TextCase.InvertCase' returns InvertCaseSwapper", () => {
      // Given
      const factory = new CaseSwapperFactory();
      // When, Then
      expect(factory.getCaseSwapper(TextCase.Invert)).toBeInstanceOf(swapper.InvertCaseSwapper);
    });
  });
});
