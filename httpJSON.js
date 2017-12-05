var http=require('http');
var fs=require('fs');
var url=require('url');
var port=process.argv[2];


//console.log(port);
function convertTimeformat (reqUrl, isUnix) {
    let time,h,m,s, timeObj;

    
    if(isUnix){
        //var parsedUnixTime= new Date('Mon, 25 Dec 1995 13:30:00 GMT').getUnixTime();
        time=reqUrl.path.match(/(=.*)/g).join('');
        time=time.substring(1, time.length-1);
        time=new Date(time).getTime();
        timeObj = {'unixtime': time};
        //console.log(new Date(time).getTime());
        return JSON.stringify(timeObj);
        //return 'Hi';
    } else {
        time=reqUrl.path.match(/(T[^a-zA-Z]*\.)/g).join('');
        time=time.substring(1, time.length-1);
        h=parseInt(time.split(':')[0]);
        m=parseInt(time.split(':')[1]);
        s=parseInt(time.split(':')[2]);
        timeObj = {'hour': h, 'minute':m, 'second':s};
        return JSON.stringify(timeObj);
    }
    
}


var server=http.createServer(function(req,res){
    var reqUrl=url.parse(req.url, true);
    var toWrite='';
    
    if (req.url.includes('parsetime')){
        //console.log(reqUrl.path);
        toWrite=convertTimeformat(reqUrl, false);
    } else if (req.url.includes('unixtime')) {
        //console.log('need unixtime');
        //toWrite=reqUrl.pathname;
        toWrite=convertTimeformat(reqUrl, true);
    } else {
        toWrite='Bad pathname provided'
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(toWrite);
});
server.listen(port);