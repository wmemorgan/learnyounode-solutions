//Exercise 5: Filtered LS

var fs = require('fs'),
    path = require('path'),
    filePath = process.argv[2],
    fileExt = process.argv[3];

fs.readdir(filePath, function(err, items) {
    for (var i=0; i<items.length; i++) {
        var ext = path.extname(items[i]);
        if (path.extname(items[i]) === "." + fileExt) {
            console.log(items[i]);
        }
    }
});
 