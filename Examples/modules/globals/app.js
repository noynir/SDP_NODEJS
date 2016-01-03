var logger = require('./logger');

global.prefix="::";

//console.log(a);
console.log(global.a);
console.log(logger.a);
logger.log('Hello');

setTimeout(function(){
    logger.log(' going once');

},1000);

setTimeout(function(){
    logger.log(' going twice');
},2000);

logger.err('This is an error...');
