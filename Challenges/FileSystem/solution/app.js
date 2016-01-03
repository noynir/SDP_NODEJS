var fs = require('fs');

var filePath = process.argv[2];



fs.stat(filePath,function(err,stats){
    if(err){
        return console.log("File not found");
    }
    if(stats.isDirectory()){
        return console.log("No file in path");
    }

    var stream = fs.createReadStream(filePath,'utf8');

    stream.pipe(process.stdout);

});


