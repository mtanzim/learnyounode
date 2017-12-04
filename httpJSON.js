var http=require('http');
var fs=require('fs');
var url=require('url');
var port=process.argv[2];


//console.log(port);

var server=http.createServer(function(req,res){
    var reqUrl=url.parse(req.url, true);
    console.log(reqUrl);
    res="Hi There!";
});
server.listen(port);