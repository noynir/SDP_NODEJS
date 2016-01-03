var express = require('express');
var router = express.Router();
var service= require('../Modules/taskService');

router.get("/",function(req,res){
	res.render("tasks",{tasks:service.getTasks()});
});

router.post("/",function(req,res){

	service.addTask(req.body.title,req.body.completed ? true : false)
	res.render("tasks",{tasks:service.getTasks()});
})

router.post("/setCompleted",function(req,res){
	var completed=req.body.completed ==='true' ? true : false;
	service.setCompleted(req.body.title,completed);
	res.send({success:true,completed:completed});
})



module.exports=router;