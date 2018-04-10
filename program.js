//Exercise 7: HTTP Client

const http = require('http');
let url = process.argv[2];

http.get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', (data) => { console.log(data) });
}).on('error', (e) => { console.log("Got error: " + e.message) });
