var http = require('http');
var url = require ('url');

http.createServer(function (req, res) {
       var pathname = url.parse(req.url).pathname;
       res.writeHead(200, {'Content-Type': 'text/plain'});
       res.end('I Have arrived at path: '+pathname +'\n');
}) .listen(3000, '127.0.0.1');
console.log('Node Server running at http://127.0.0.1:3000/');