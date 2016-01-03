var eventEmitter = require('events').EventEmitter;

module.exports.eventor =function(){

	e=new eventEmitter();

	setTimeout(function(){
		e.emit("start","i am eventor...");
	}, 1000);

	setTimeout(function(){
		e.emit("message","this is a message from eventor" );
	},2000)

	return e;


}