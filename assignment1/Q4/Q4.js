const fs=require("fs")
fs.writeFileSync("demo.txt","AAA");
const read1=fs.readFileSync("demo.txt","utf-8");
console.log(read1);
fs.writeFileSync("demo.txt","BBB");
const read2=fs.readFileSync("demo.txt","utf-8");
console.log(read2);
fs.appendFileSync("demo.txt","CCC");
const read3=fs.readFileSync("demo.txt","utf-8");
console.log(read3);
