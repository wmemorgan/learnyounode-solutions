//Exercise 6: Make It Modular

const listfiles = require('./listfiles'),
    filePath = process.argv[2],
    fileExt = process.argv[3];

const callback = (err, items) => {
    if (err) {
        return console.error("Error is:", err);
    } else {
        items.forEach(item => console.log(item));
    }
    
}

listfiles(filePath, fileExt, callback);
