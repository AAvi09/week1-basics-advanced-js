//promise class gives us a promise that i will return u something in the future.
// setTimeout(fn,3000) is a promise that will return u something in the future.
// promise is a class that is used to handle asynchronous operations in JavaScript.

function logName() {
  console.log("chilgozanand");
}

setTimeout(logName, 3000); // This will log "chilgozanand" after 3 seconds

function setTimeOutPromisified(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Time is up after " + ms + " milliseconds");
    }, ms);
  });
}

let p = setTimeOutPromisified(5000).then((result) => {
  console.log(result);
});
console.log(p);

function promisifiedIsEvenNumber(n) {
  return new Promise((resolve, reject) => {
    if (n % 2 === 0) {
      resolve(`${n}is an even number`);
    } else {
      reject(`${n} is not an even number`);
    }
  });
}

let p1 = promisifiedIsEvenNumber(566)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
