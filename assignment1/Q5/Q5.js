const fs=require("fs");
fs.mkdirSync("myProject");
fs.writeFileSync("myProject/info.txt","This is inside a folder");
const items=fs.readdirSync("myProject");
console.log(items)