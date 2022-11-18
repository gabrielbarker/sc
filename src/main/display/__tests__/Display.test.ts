import Display from "../Display";

const mockLog = jest.fn();

beforeEach(() => {
  console.log = mockLog;
});

describe("Display", () => {
  it("'print' calls `console.log`", async () => {
    // Given
    const text = "TEXT";
    const display = new Display();
    // When
    display.print(text);
    // Then
    expect(mockLog).toBeCalledWith(text);
  });
});
