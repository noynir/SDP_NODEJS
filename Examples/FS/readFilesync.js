var fs = require('fs');
var Path = require('path');

console.log('start reading file');
var f = fs.readFileSync(Path.join(__dirname,process.argv[2]),'utf-8');
console.log(f);
console.log('done');