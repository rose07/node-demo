				// 1.引入http 
				// 2.新建服务
				// 3.监听端口
				const http = require('http');
				var express = require('express');
				var fs = require("fs");
				var app = express();

				app.get('/', function(req, res) {
				    res.sendfile('demo.html');
				})
				app.get('/buttonData', function(req, res) {
				    var data = fs.readFileSync('hh.txt', 'UTF-8');
				    res.send({ success: true, row: data });
				})

				app.listen(9988);
				console.log('start 127.0.0.1:9988')