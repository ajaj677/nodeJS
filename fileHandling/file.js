//operations on files
//fs - file system

const  fs = require("fs");

// sync call, creates a file
// fs.writeFileSync("./test.txt", "hey there");
// fs.watchFile("./test.txt", "hey there async", (err) => {})

// but aysnc expect callbact function and doesnt resturn anything
const fs = require('fs');

fs.readFile('data.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});


//sync show the result and throw the error but
const result = fs.readFileSync("./contacts.txt", "utf-8", (err, result) => {
   if (error){
    console.log("error", err);
  } else {
    console.log(result)
  } 
});

console.log(result)

