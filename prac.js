const fs = require("fs");
const data = fs.readFileSync("a.txt", "utf-8");
console.log(data);

const data2 = fs.readFileSync("b.txt", "utf-8");
console.log(data2);
