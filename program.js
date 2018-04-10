//Exercise 8: HTTP Collect
//using third-party package to manage data

const http = require('http'),
 BufferList = require('bl'), //third-party package
 bl = new BufferList();
let url = process.argv[2];

http.get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', (data) => { bl.append(data) });
    res.on('end', () => {
        console.log(bl.length);
        console.log(bl.toString());
    });
}).on('error', (e) => { console.log("Got error: " + e.message) });
