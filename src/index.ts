import App from "./main/App";
import { TextCase } from "./main/case/";

const app = new App();
const text = "hElLo";
console.log(text);
console.log(app.swapCase(text, TextCase.Upper));
console.log(app.swapCase(text, TextCase.Lower));
console.log(app.swapCase(text, TextCase.Title));
