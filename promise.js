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
