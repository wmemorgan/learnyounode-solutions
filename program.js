//Exercise 4: My First Async I/O!

const fs = require('fs'),
    filePath = process.argv[2];
let lines = undefined;

const getFile = (callback) => {
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        lines = data.toString().split('\n').length - 1;
        callback();
    })
}

const contentLength = () => {
    console.log(lines);
}

getFile(contentLength);