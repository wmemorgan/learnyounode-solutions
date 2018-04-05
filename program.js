// Solution based on article by Daniel Paul Grech Pereira
// https://medium.com/coding-and-web-development/learnyounode-exercise-3-2aa8d6aba68a
var fs = require("fs");
var filePath = process.argv[2];
// console.log(filePath);
var output = fs.readFileSync(filePath);
output = output.toString().split("\n");
console.log(output.length-1);

//Official Solution
var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)