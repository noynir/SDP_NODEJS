var express=require('express');
var router=express.Router();

router.get("/",function(req,res){
  //res.send("Hello from express router");
  res.render("index");
});

router.get("/page1/:id/:name?",function(req,res){
  res.send(JSON.stringify(req.params)+ JSON.stringify(req.query) )
});

module.exports=router;