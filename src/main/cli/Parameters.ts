import { TextCase } from "../case";

class Parameters {
  constructor(private _parameters: { case: TextCase }) {}

  get case(): TextCase {
    return this._parameters.case;
  }
}

export default Parameters;
