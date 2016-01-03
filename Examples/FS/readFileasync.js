var fs = require('fs');
var Path = require('path')
var start = Date.now();

console.log('start reading files');

fs.readFile(Path.join(__dirname,process.argv[2]),'utf-8', function (err, data) {
    if (err) throw err;
    console.log('done file 1 after ' + (Date.now() - start));
});


fs.readFile(Path.join(__dirname,process.argv[2]),'utf-8', function (err, data) {
    if (err) throw err;
    console.log('done file 2 after ' + (Date.now() - start));
});

console.log('started')