var fs = require('fs');
var Path = require('path');
var colors = require('colors');


fs.readdir(process.argv[2], function(err,files){

    if(err){
        return console.log("Error");
    }
    files.forEach(function(file){
        var path = Path.join(process.argv[2],file);

        fs.stat(path,function(err,stats){
            if( typeof(stats)!=="undefined"){
                if(stats.isDirectory()){
                    console.log(path.red); 
                }
                else{
                    console.log(path.green);
                }
            }
        });
    });
    
})