var http=require('http');
var fs=require('fs');
var port=process.argv[2];


console.log(port);

var server=http.createServer(function(req,res){
   //server handling logic
    //var file = fs.createReadStream(fileToServe);
    req.pipe(res);
    console.log(req);
    console.log(res);
    /*
    req.pipe(map(function(chunk){
        return chunk.toString().toUpperCase()    
    })).pipe(res)
    
    */
});
server.listen(port);