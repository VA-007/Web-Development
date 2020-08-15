const fs = require("fs");
let text = fs.readFileSync("Test.txt", "utf-8");
text = text.replace("first", "lassan");

console.log("The content of the file is")
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("rohan.txt", text);
