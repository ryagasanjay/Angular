var http = require('http');

http.createServer(function(req, resp) {
    resp.writeHead(200, { 'Content-Type': 'text/html' });
    resp.end("Hello World");

}).listen(8080);
