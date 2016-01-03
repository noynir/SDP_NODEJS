var request = require("request")

//XTqARuzh5WNPqzA6WN3xoA((
// /2.2/questions?page=1&pagesize=10&order=desc&sort=activity&tagged=nodejs&site=stackoverflow

var baseRequest=request.defaults({
	baseUrl:"https://api.stackexchange.com/2.2",
	method:"GET",
	json:true,
	gzip:true
});
function doRequest(options,callback){
	
	var req = baseRequest.defaults({
		qs:{
			key:"XTqARuzh5WNPqzA6WN3xoA((",
			sort:"activity",
			tagged:"node.js",
			site:"stackoverflow",
			intitle:options.query,
			order:"desc",
			page:options.page,
			pagesize:options.pagesize
		}
	});
	
	req(options.url,function(err,response,body){
		if(response.statusCode===200){
		 	callback(body.err,body);
		}
		else{
			callback("request failed with error code:"+response.statusCode);
		}
	});

}

var stackApi = {
	
	getQuestions:function(page,pagesize,callback){
		return doRequest({url:"/questions",page:page,pagesize:pagesize},callback);
	},
	searchQuestions:function(query,page,pagesize,callback){
		return doRequest({url:"/search",query:query,page:page,pagesize:pagesize},callback);
	}

		
};

module.exports = stackApi;


