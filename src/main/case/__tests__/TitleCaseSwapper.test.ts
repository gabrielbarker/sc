import TitleCaseSwapper from "../TitleCaseSwapper";

const mockSeparateWords = ["abc", "def", "ghi"];
const expectedTitleCaseWord = "Abc Def Ghi";
const mockSeparate = jest.fn().mockImplementation(() => mockSeparateWords);
jest.mock("../WordSeparator", () => {
  return jest.fn().mockImplementation(() => ({
    separate: mockSeparate,
  }));
});

describe("TitleCaseSwapper", () => {
  it("returns title case string", () => {
    // Given
    const swapper = new TitleCaseSwapper();
    // When, Then
    expect(swapper.swap("mock text")).toEqual(expectedTitleCaseWord);
  });

  // it("with a snake case string 'swap' returns title case string", () => {
  //   // Given
  //   const text = "snake case string";
  //   const expectedText = "Snake Case String";
  //   const swapper = new TitleCaseSwapper();
  //   // When, Then
  //   expect(swapper.swap(text)).toEqual(expectedText);
  // });

  // it("with a snake case string 'swap' returns title case string", () => {
  //   // Given
  //   const text = "snake case string";
  //   const expectedText = "Snake Case String";
  //   const swapper = new TitleCaseSwapper();
  //   // When, Then
  //   expect(swapper.swap(text)).toEqual(expectedText);
  // });
});
