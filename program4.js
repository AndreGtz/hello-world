
var fs = require('fs')
fs.readFile(process.argv[2],function callback(err,buffer){
	console.log(buffer.toString().split('\n').length-1);
})

