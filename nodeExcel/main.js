var xlsx = require('node-xlsx');
var fs = require('fs');
//读取文件内容
var obj = xlsx.parse(__dirname + '/1.xls');
var excelObj = obj[0].data;

var data = [];
 var arr = [];
for (var i in excelObj) {
   
    var value = excelObj[i];
    for (var j in value) {
        arr.push(value[j]);
    }
   
}
 data.push(arr);
console.log(data);
