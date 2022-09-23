import App from "./main/App";
import { TextCase } from "./main/case/";

const app = new App();
console.log("hElLo");
console.log(app.swapCase("hElLo", TextCase.Upper));
console.log(app.swapCase("hElLo", TextCase.Lower));
