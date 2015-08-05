
var fs = require('fs')
fs.readdir(process.argv[2],function callback(err,buffer){
	for(var i = 0; i<buffer.length;i++){
		if(buffer[i].length>1){
			var spl= buffer[i].split(".");
		if(spl[1]==process.argv[3]){
			console.log(buffer[i]);
		}}
	}
})

