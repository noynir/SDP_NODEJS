var express = require('express');
var router = express.Router();
var service= require('../Modules/taskServiceDb');

router.get("/",function(req,res){
    service.getTasks().then(function(tasksData){
        res.render("tasks",{tasks:tasksData});
    },function(err){
        throw err;
    });
	
});

router.post("/",function(req,res){

	service.addTask(req.body.title,req.body.completed ? true : false)
    .then(function(){
       return service.getTasks(); 
    })
    .then(function(tasksData){
       res.render("tasks",{tasks:tasksData}); 
    })
	
})

router.post("/setCompleted",function(req,res){
	var completed=req.body.completed ==='true' ? true : false;
	service.setCompleted(req.body.id,completed).then(function(){
        res.send({success:true,completed:completed});
    })
	
})

module.exports=router;