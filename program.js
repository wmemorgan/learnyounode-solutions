//Exercise 11: HTTP File Server
//based on tutorial from Daniel Paul Grech Pereira

const http = require('http'),
 fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    fs.createReadStream(process.argv[3]).pipe(res);
}).listen(process.argv[2]);



