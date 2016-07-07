var net = require('net');

var clients=[];

var server= net.createServer(function(socket){

    socket.write('hello');

    socket.name=socket.remoteAddress + ":" + socket.remotePort;
    clients.push(socket);

    socket.on("data",function(data){
        console.log(data.toString());
        clients.forEach(function(client){
            if(client!==socket){
                client.write(data);
            }else{
                client.write("command executed\n");
            }
        })  
    });

});

server.listen(3003);