var http=require('http');
var fs=require('fs');
var port=process.argv[2];
var fileToServe=process.argv[3];

console.log(port);
console.log(fileToServe);

var server=http.createServer(function(req,res){
   //server handling logic
    var file = fs.createReadStream(fileToServe);
    file.pipe(res);
});
server.listen(port);