
var fs=require("fs");

var fileListModule = function(dirName, extension, callback){
//var dirName=process.argv[2];
//var extension=process.argv[3];
	fs.readdir(dirName, function(err,list){
		if (err){
			callback (err, null);
		} else {
			callback (null,list.filter(file => file.indexOf('.'+extension)!==-1 ));
		}
	});

}

module.exports = fileListModule;
