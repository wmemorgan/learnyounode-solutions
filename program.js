//Exercise 4: My First Async I/O!

var fs = require('fs'),
    filePath = process.argv[2],
    lines = undefined;

function getFile(callback) {
    fs.readFile(filePath, function doneReading(err, data) {
        if (err) throw err;
        lines = data.toString().split('\n').length - 1;
        callback();
    })
}

function contentLength() {
    console.log(lines);
}

getFile(contentLength);