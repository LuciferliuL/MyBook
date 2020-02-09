var http = require('http');
const tools = require('./tools')


http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  console.log('1');
  response.end('Hello World你好');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');