const fs=require("fs")
// CREATE
fs.writeFileSync("tasks.txt","Task 1: Learn Node");
// APPEND
fs.appendFileSync("tasks.txt","\nnodeTask 2: Learn fs module");
// READ
const data=fs.readFileSync("tasks.txt","utf-8");
console.log(data);
