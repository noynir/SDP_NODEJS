
var express=require('express');
var api = require('../Modules/stackApiClient');
var router = express.Router();


var searchHandler=function(req,res){
    var page=req.query.page || 1;
    var pagesize = req.query.pagesize || 10;
    var query=req.body.q || req.query.q;

    api.searchQuestions(query,page,pagesize,function(err,data){
        res.render("questions",{data:data,curPage:parseInt(page), q:query });
    });
}
router.route("/")
    .get(searchHandler)
    .post(searchHandler);

module.exports=router;
