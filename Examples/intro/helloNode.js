var http=require('http');

var server=http.createServer(function(req,res){	
			
	res.writeHead(200);
	res.write('Hello NodeJS');
	res.end();
	
});
server.listen(3001);
console.log('Listening')