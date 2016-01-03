var eventor=require("./eventor").eventor();
var eventor2 = require("./eventor2");

eventor.on("start",function(data){
	console.log(data);
})

eventor.on("message",function(data){
	console.log(data);
})

var evn=new eventor2();

evn.on("start",function(data){
	console.log(data);
});

evn.on("message",function(data){
	console.log(data);
})
