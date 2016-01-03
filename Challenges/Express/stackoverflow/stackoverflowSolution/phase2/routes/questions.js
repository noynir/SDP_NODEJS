var express=require('express');
var api = require('../Modules/stackApiClient');
var router = express.Router();

router.get("/:page?",function(req,res){
    var page = req.params.page || 1;
    var pagesize = req.query.pagesize || 10;
    api.getQuestions(page,pagesize,function(err,data){

        res.render("questions",{data:data,curPage:parseInt(page)});
    });

});



module.exports=router;