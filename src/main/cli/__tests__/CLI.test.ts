import CLI from "../CLI";

const mockParse = jest.fn();
jest.mock("../CommandFactory", () => {
  return jest.fn().mockImplementation(() => ({
    createCommand: jest.fn().mockImplementation(() => ({
      parse: mockParse,
    })),
  }));
});

const args = ["Argument 1", "Argument 2", "Argument 3"];

describe("CLI", () => {
  it("'run' calls parse method on program", async () => {
    // Given
    const cli = new CLI();
    // When
    cli.run(args);
    // Then
    expect(mockParse).toBeCalled();
  });
});
