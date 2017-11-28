var http=require("http");
var fs = require('fs');
var concat = require('concat-stream');

var concatStream=concat(gotStream);
http.get(process.argv[2], function(response){
    //console.log(response);
    /*
    response.on('data',function(data){
       data.toString().pipe(concatStream); 
    });
    */
    response.pipe(concatStream);
});

function gotStream (allData){
    console.log(allData.toString());
}