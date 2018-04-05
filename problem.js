console.log(process.argv);

for (var i = 0; i < process.argv.length; i++) {
    console.log(process.argv[i]);
}

var filePath = process.argv[2];
console.log(filePath);