var eventEmitter = require('events').EventEmitter;
var util= require('util');

var Eventor =function(){

	var self=this;

	setTimeout(function(){
		self.emit("start","i am eventor...");
	}, 1000);

	setTimeout(function(){
		self.emit("message","this is a message from eventor" );
	},2000)

}

util.inherits(Eventor,eventEmitter);

module.exports=Eventor;