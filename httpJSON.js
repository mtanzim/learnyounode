var http=require('http');
var fs=require('fs');
var url=require('url');
var port=process.argv[2];


//console.log(port);

var server=http.createServer(function(req,res){
    var reqUrl=url.parse(req.url, true);
    var toWrite='';
    
    if (req.url.includes('parsetime')){
        //console.log(reqUrl.path);
        let time,h,m,s, timeObj;
        time=reqUrl.path.match(/(T[^a-zA-Z]*\.)/g).join('');
        time=time.substring(1, time.length-1);
        h=parseInt(time.split(':')[0]);
        m=parseInt(time.split(':')[1]);
        s=parseInt(time.split(':')[2]);
        timeObj = {'hour': h, 'minute':m, 'second':s};
        //console.log(JSON.stringify(timeObj));
        toWrite=JSON.stringify(timeObj);
    } else if (req.url.includes('unixtime')) {
        //console.log('need unixtime');
        toWrite=reqUrl.pathname
    } else {
        toWrite='Bad pathname provided'
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(toWrite);
});
server.listen(port);