var express = require('express');
var path = require("path");
var app = express();
app.set("view engine","jade");
app.set("views",path.join(__dirname,"views"));

app.get('/',function(req,res,next){
  res.send("Hello Express");
});
app.get('/page1',function(req,res,next){
  res.render("index",{ products:["car","phone","banana"] });
});

app.get('/products/:id/:name?',function(req,res,next){
  req.params.name = req.params.name || "null"
  res.send("Params, Id:"+req.params.id + " name: "+req.params.name+" param:"+req.query.param);
});















// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
