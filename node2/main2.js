/*非阻塞代码*/
var fs=require("fs");
fs.readFile("package.json",function (err,data) {
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});
console.log("执行完成");