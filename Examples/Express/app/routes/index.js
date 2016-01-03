var express=require('express');
var router=express.Router();

router.get("/",function(req,res){
  res.render("index");
})

router.get("/page1/:name?",function(req,res){
  res.send("Hello "+ req.params.name);

});

module.exports=router;
