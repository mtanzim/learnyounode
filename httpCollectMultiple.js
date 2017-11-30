var http=require("http");
var fs = require('fs');
var concat = require('concat-stream');
var stream=[];
var streams=[];


function collectStream (id){
    http.get(process.argv[id], function(response){
        //console.log(response);
        response.setEncoding('utf-8');
        response.on('data',function(data){
           //console.log(data.toString());
           stream.push(data);
        });
        response.on("error", (e)=>{console.log(e)});
        response.on("end", function(){
            //console.log(stream.join('').length )
            console.log(stream.join(''));
            stream=[];
            if (id<4){
                collectStream(id+1);
            }
        });
        
    });
}

collectStream(2);

/*
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
*/