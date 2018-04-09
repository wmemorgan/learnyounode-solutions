//Exercise 5: Filtered LS
//ES6 format
const fs = require('fs'),
    path = require('path');
    
let filePath = process.argv[2],
    fileExt = process.argv[3];

fs.readdir(filePath, (err, items) => {
    items.forEach((item) => {
        if(path.extname(item) === '.' + fileExt) {
            console.log(item);
        }
    })
});
 