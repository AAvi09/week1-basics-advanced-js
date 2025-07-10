function canVote(age) {
  if (age >= 18) {
    console.log("you are eligible to vote");
  } else {
    console.log("you are not eligible to vote");
  }
}

function userAge(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > 18 && arr[i].gender == "male") {
      console.log(arr[i].name);
      result.push(arr[i].name);
      console.log(result);
    }
  }
}

const users = [
  {
    name: "anna",
    age: 20,
    gender: "male",
  },
  {
    name: "chotu",
    age: 25,
    gender: "male",
  },
  {
    name: "sita",
    age: 13,
    gender: "female",
  },
  {
    name: "golu",
    age: 20,
    gender: "female",
  },
];
userAge(users);

function sum(a, b) {
  return parseInt(a) + parseInt(b);
}

let ans = sum(10, "20");
console.log(ans);

function sumFromANumber(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function printSum(n) {
  return n + printSum(n - 1);
}
