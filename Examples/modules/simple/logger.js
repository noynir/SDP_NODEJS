var moment = require('moment');
module.exports.log = function(msg){
    console.log(moment().format("llll")+ " ==> " + msg);
}
module.exports.a="test";
var a = "test";
x = "";