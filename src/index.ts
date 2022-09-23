import App from "./main/App";
import { TextCase } from "./main/case/";

print("hElLo");
print("A simple test string");
print("camelCaseString");
print("kebab-case-string");

function print(text: string): void {
  const app = new App();
  console.log(text);
  console.log(`Upper   : ${app.swapCase(text, TextCase.Upper)}`);
  console.log(`Lower   : ${app.swapCase(text, TextCase.Lower)}`);
  console.log(`Title   : ${app.swapCase(text, TextCase.Title)}`);
  console.log(`Camel   : ${app.swapCase(text, TextCase.Camel)}`);
  console.log(`Constant: ${app.swapCase(text, TextCase.Constant)}`);
  console.log(`Dot     : ${app.swapCase(text, TextCase.Dot)}`);
  console.log(`Kebab   : ${app.swapCase(text, TextCase.Kebab)}`);
  console.log(`Pascal  : ${app.swapCase(text, TextCase.Pascal)}`);
  console.log(`Path    : ${app.swapCase(text, TextCase.Path)}`);
  console.log(`Sentence: ${app.swapCase(text, TextCase.Sentence)}`);
  console.log();
}
