var start = Date.now();
//console.log('start: ' + strat);

setTimeout(function (){
    console.log('Going once: ' + (Date.now() - start));
    for(var i =0;i < 5000000000; i++){
    }
},1000);

setTimeout(function (){
    console.log('Going twice: ' + (Date.now() - start));
},2000);
