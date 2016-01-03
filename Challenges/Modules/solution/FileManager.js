var fs=require('fs');
var path = require('path');
var url = require('url');

var mimeTypes = {
    ".html": "text/html",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".js": "text/javascript",
    ".css": "text/css"
};

var getFilePathFromUrl = function(_url){
    var uri = url.parse(_url);
    return path.join(process.cwd(), uri.pathname);
}

module.exports.GetFileStreamFromUrl=function(_url) {

    var filepath = getFilePathFromUrl(_url);

    return fs.createReadStream(filepath);

};



module.exports.GetMimeTypeFromUrl=function(_url){
    var filepath = getFilePathFromUrl(_url);

    var fileExt = path.extname(filepath);
    return fileExt.length>1 ? mimeTypes[fileExt] : "text/plain";

}
