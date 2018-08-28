var http = require('http');
var app = require('express');
var  cheerio = require('cheerio');
const superagent = require('superagent');

var url = 'http://192.168.10.133:8080/ktl/help.jsp';

superagent.get(url).end(function (err, res) {
     if(err){
         console.log  (err);
     }
    let $ = cheerio.load(res.text);
		//获取表格所有的数据
		var result = [];
		$('table').get().map(function(item,index){ 		
			var temp = {
                title: '',
                data: []
            };
			$(item).find('tr').get().map(function(tr){
				temp.data.push({
                    name: $(tr).find('td').eq(1).text(), //名称
                    url: $(tr).find('td a').eq(0).text(), //url后缀
                    pointer_url: $(tr).find('td a').eq(0).attr('href') //跳转 url链接
                })
                 result.push(temp);
			})
		})
		console.log(result);
});















// app.listen(9988, function() {
//     console.log('run server 127.0.0.9988');
// })