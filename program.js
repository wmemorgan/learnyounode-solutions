//Exercise 12: HTTP UPPERCASER
//based on tutorial by Daniel Paul Grech Pereira

const http = require('http'),
 map = require('through2-map');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.pipe(map( (chunk) => {
            return chunk.toString().toUpperCase();
        })).pipe(res);
    }
}).listen(process.argv[2]);



