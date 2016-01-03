var moment = require('moment');
var colors = require('colors');

global.prefix="==>"
exports.log = function(msg){
    console.log(format(msg).green);
}

exports.err = function(msg){
    console.log(format(msg).red);
}

function format(msg){
    return moment().format('llll') + global.prefix + msg;
}