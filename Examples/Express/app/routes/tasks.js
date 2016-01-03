var express=require('express');
var taskService=require("../Modules/taskService")
var router=express.Router();

router.get("/",function(req,res){
	res.render("tasks",{tasks:taskService.getTasks()} );
});
router.post("/",function(req,res){
	taskService.addTask(req.body.title,req.body.completed);
	res.render("tasks",{tasks:taskService.getTasks()} );
});
router.post("/setCompleted",function(req,res){
	var completed=req.body.completed ==='true' ? true : false;
	taskService.setCompleted(req.body.title,completed);
	res.send({success:true,completed:completed});
});

module.exports=router;