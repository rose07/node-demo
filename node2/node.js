var http=require("http");
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end("hellow world\n")
}).listen(8888);
console.log("服务启动，请再浏览器中输入127.0.0.1:8888");