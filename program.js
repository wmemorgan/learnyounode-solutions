//Exercise 8: HTTP Collect
//append data method

const http = require('http');
let url = process.argv[2];
let completeData = '';
http.get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', (data) => { completeData += data });
    res.on('end', () => {
        console.log(completeData.length);
        console.log(completeData);
    });
}).on('error', (e) => { console.log("Got error: " + e.message) });
