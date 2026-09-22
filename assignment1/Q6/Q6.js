const fs=require("fs");
console.log("1.start");
fs.readFile("welcome.txt","utf-8",(err,data)=>{
  if(err){
    console.log("error");
    return
  }
  console.log("data")
});
console.log("3.end")