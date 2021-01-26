// 1、引入模块
var http = require('http');
// var fs = require('fs');
// // 2、搭建服务器
// var server = http.createServer(function(request, response) {
//     console.log(request.url)
//     response.writeHead(200, {
//         'content-type': 'text/html;charset:utf-8'
//     })
//     response.write(fs.readFileSync('./index.html'));
//     response.end("hello");
// })
// server.listen(8080, function() {
//     console.log('端口号localhost:' + server.address().port)
// });
http.createServer((request, response) => {
  let body = [];
  console.log('request:', request)
  request.on('error', err => {
    console.error(err);
  }).on('data', chunk => {
    console.log('http receive data:', chunk)
    body.push(chunk);
  }).on('end', () => {
    console.log('http receive end:')
    body = Buffer.concat(body).toString();

    console.log('body:', body);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(' Hello World\n');
  });
}).listen(8088, () => {
  console.log('Server started');
});