import { Cases } from "../../case";
import Parameters from "../Parameters";

const parameters = { case: Cases.Camel };

describe("Parameters", () => {
  it("'case' returns correct value", () => {
    // Given
    const args = new Parameters(parameters);
    // When
    const actualCase = args.case;
    // Then
    expect(actualCase).toEqual(parameters.case);
  });
});
