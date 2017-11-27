//console.log("HELLO WORLD");
/*
var sum=0;
process.argv.forEach(function(item,index) {
	//var sum=0;
	if (index >1){
		sum+=Number(item);
	}
	return sum;

});


console.log(sum);
*/


var fs=require("fs");

/*
var buf=fs.readFileSync(process.argv[2]);

var lines = buf.toString().split('\n').length-1;

//console.log(buf.toString());
console.log(lines);
*/

/*
fs.readFile(process.argv[2], function (err, data){
	if(err){
		console.log(err);
	} else {
		console.log(data.toString().split('\n').length-1);
	}
});
*/

var dirName=process.argv[2];
var extension=process.argv[3];

fs.readdir(dirName, function(err,list){
	if (err){
		console.log(err);
	} else {
		var txtOnly=list.filter(file => file.indexOf('.'+extension)!==-1 );
		txtOnly.forEach(function(line){
			console.log(line);
		});
	}
});
