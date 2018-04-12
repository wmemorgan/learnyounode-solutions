//Exercise 13: JSON API Server
//

const http = require('http'),
 map = require('through2-map');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.pipe(map( (chunk) => {
            return chunk.toString().toUpperCase();
        })).pipe(res);
    }
}).listen(process.argv[2]);


/*NOTES

ENDPOINT
//1.Receive GET request
if (path === '/api/parsetime') 

//2.Send data in JSON format
parse ISO-format time into:
-hour
-minute
-second

//3.Listen on port process.argv[2]

SECOND ENDPOINT

//1.Receive GET request
if (path === '/api/unixtime')

//2.Send data in JSON format
parse ISO-format time into:
-milliseconds

//3.Listen on port process.argv[2]


*/




