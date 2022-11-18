import CommandFactory from "../CommandFactory";

jest.mock("../App", () => {
  return jest.fn().mockImplementation(() => ({ swap: jest.fn() }));
});

const mockArgument = jest.fn().mockReturnThis();
const mockAction = jest.fn().mockReturnThis();
const mockAddOption = jest.fn().mockReturnThis();
jest.mock("commander", () => ({
  Option: jest.fn(() => ({
    choices: jest.fn().mockReturnThis(),
    makeOptionMandatory: jest.fn().mockReturnThis(),
  })),
  Command: jest.fn(() => ({
    argument: mockArgument,
    action: mockAction,
    addOption: mockAddOption,
  })),
}));

const args = ["Argument 1", "Argument 2", "Argument 3"];

describe("CommandFactory", () => {
  it("'createCommand' calls correct methods on program", async () => {
    // Given
    const factory = new CommandFactory();
    // When
    factory.createCommand();
    // Then
    expect(mockArgument).toBeCalled();
    expect(mockAction).toBeCalled();
    expect(mockAddOption).toBeCalled();
  });
});
