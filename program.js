//Exercise 12: HTTP UPPERCASER

const http = require('http'),
 map = require('through2-map'),
 fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        var body = '';
    }
    
    req.on('data', (data) => {
        body += data;
    });
    
    req.on('end', () => {
        
        res.end(console.log(body.toUpperCase()));
    })
}).listen(process.argv[2]);



