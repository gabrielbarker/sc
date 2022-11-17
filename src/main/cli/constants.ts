import { Cases } from "../case";

const caseFlags = "-c, --case <case>";
const caseDescription = "case to swap to";
const caseOptions = Object.values(Cases);

const textArgumentName = "[text]";
const textArgumentDescription = "text to switch the case of";

const CONSTANTS = {
  caseFlags,
  caseDescription,
  caseOptions,
  textArgumentName,
  textArgumentDescription,
};

export default CONSTANTS;
