var fs = require('fs');
var Path = require('path');

var colors = require('colors');

var start = Date.now();

console.log('start reading files');

var strm1 = fs.createReadStream(Path.join(__dirname,process.argv[2]));
strm1.setEncoding('utf8');

strm1.pipe(process.stdout);
