//Module to display files based on directory path and file extension

const fs = require('fs'),
    path = require('path');

module.exports = (filePath, fileExt, callback) => {
    fs.readdir(filePath, (err, items) => {
        if(err) {
            // return console.error("Error: ", err);
            return callback(err);
        } else {
             const filterItems = items.filter(item => path.extname(item)=== "." + fileExt); 
             callback(null, filterItems);
        } 
    });
}
 