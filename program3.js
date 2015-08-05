
var fs = require('fs')
fs.readFile('file',function callback(err,buffer){
	console.log(buffer.toString().split('\n').length-1);
})

