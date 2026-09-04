const fs=require("fs")
const data=fs.readFileSync("welcome.txt","utf-8")
console.log(data);