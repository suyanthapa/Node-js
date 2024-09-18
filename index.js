// const math = require('./math');

// console.log(math );

const fs = require("fs");
// fs.writeFileSync("./demo.txt", " Hello Suyan this is node js from---- SYNC call" );

// fs.writeFile("'demo1.txt", " Hello Suyan this is node js fromm ---- ASYNC call" , (err) =>
// {

// });
// const fs = require('fs');

// fs.readFile('./contacts.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log('ERROR:', err);
//     } else {
//         console.log(result);
//     }
// });

// fs.appendFileSync("./contacts.txt" ,"hello append??");
console.log("1111");
fs.readFile('contacts.txt', 'utf-8' , (err, result) => {
  console.log(result);
});

console.log("222222");