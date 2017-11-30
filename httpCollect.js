var http=require("http");
var fs = require('fs');
var concat = require('concat-stream');
var stream=[];

http.get(process.argv[2], function(response){
    //console.log(response);
    response.setEncoding('utf-8');
    response.on('data',function(data){
       //console.log(data.toString());
       stream.push(data);
    });
    response.on("error", (e)=>{console.log(e)});
    response.on("end", function(){
        console.log(stream.join('').length )
        console.log(stream.join('')) 
    });
    
});