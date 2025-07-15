const fs = require("fs");
const data = fs.readFileSync("a.txt", "utf-8");
console.log(data);

const data2 = fs.readFileSync("b.txt", "utf-8");
console.log(data2);

class rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }
  area() {
    return this.length * this.breadth;
  }
  perimeter() {
    return 2 * (this.length + this.breadth);
  }
}
const rect = new rectangle(10, 5);
console.log("Area of rectangle:", rect.area());

const now = new Date();
console.log(now);

console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1); // Months are zero-indexed

const user = new Map();
user.set("name", "Avi");
user.set("nickName", "Avi");

const firstName = user.get("name");
console.log("First Name:", firstName);
