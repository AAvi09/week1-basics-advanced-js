//promise class gives us a promise that i will return u something in the future.
// setTimeout(fn,3000) is a promise that will return u something in the future.
// promise is a class that is used to handle asynchronous operations in JavaScript.

function logName() {
  console.log("chilgozanand");
}

setTimeout(logName, 3000); // This will log "chilgozanand" after 3 seconds
