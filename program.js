var fileListModule=require("./fileListModule");

fileListModule(process.argv[2],process.argv[3], function (err,listOfFiles){
	if (err) {
		console.log(err);
	} else {
		listOfFiles.forEach(function(line){
			console.log(line);
		});
	}
});

//console.log(fileList);

/*

fileList.forEach(function(line){
	console.log(line);
});
*/