var http=require('http');
var fileManager = require('./FileManager');

var reqHandler=function(req,res){
    console.log(req.path);
    console.log(process.cwd());

    var stream=fileManager.GetFileStreamFromUrl(req.url);
    res.writeHead(200,{'Content-Type': fileManager.GetMimeTypeFromUrl(req.url)});

    stream.on('error',function(err){
        res.writeHead(404);
        res.write("Whoops.. file not found.");
        res.end();
        return;
    });

    stream.pipe(res);

    return;

};

var server= http.createServer(reqHandler);

server.listen('3000');
