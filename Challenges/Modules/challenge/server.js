/*
   Build a simple Http static files server,
   The server should accept http request and serve the file with an appropriate mime type.
   If the file doesn't exist return 404
   Use only core nodejs modules.
 */

/* these are the modules you need, go to their documentation and learn how to use them. */
var fs=require('fs');
var http=require('http');
var path = require('path');
var url = require('url');
/***********************************/


//Request handler function.
var reqHandler=function(req,res){

    // var uri = you will need the url module here to parse the request url */

    // var filepath= use the path module and process global object to build the physical path from the uri;
    // var fileExt = you can also use the path module here to get the file extension.

    /*
       after parsing and building the requested file path use the fs module
       to determine if the file exists and writing it's content to the response stream

     */


    return;

};

// here is where you will be using the http module to create a server and start listening
