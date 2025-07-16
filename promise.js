//promise class gives us a promise that i will return u something in the future.
// setTimeout(fn,3000) is a promise that will return u something in the future.
// promise is a class that is used to handle asynchronous operations in JavaScript.

const fs = require("fs");

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

function raman(ramanKaJawaab) {
  setTimeout(ramanKaJawaab, 5000);
}

function callBack() {
  console.log("I am raman, I will return you after 5 seconds");
}
let piraamis = new Promise(raman);
piraamis.then(callBack);

function fileCleaner(fileName) {
  return new Promise((resolve) => {
    console.log("cleaning file ", fileName);

    setTimeout(() => {
      const raw = fs.readFileSync(fileName, "utf-8");
      const cleaned = raw.split(/\s+/).join(" ").trim();
      console.log("cleaned file content:", cleaned);
      resolve(cleaned);
    }, 5000);
  });
}

fileCleaner("a.txt").then((cleanedContent) => {
  console.log("File cleaned successfully:", cleanedContent);
});


function promisifiedSetTimeOut(fn,ms){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            try {
                fn();
                resolve("Function executed successfully after " + ms + " milliseconds");
            } catch (error) {
                reject("Error executing function: " + error.message);
            }
        }, ms);
    })
}

async function solvePromise(){
    try {
        const result = await promisifiedSetTimeOut(() => {
            console.log("Function executed");
        }, 3000);
        console.log(result);        
    }
}