var m = require('./mymodule.js');
m(process.argv[2],process.argv[3],function callback(err,data){
	if(err){
		return console.error('There was an error:',err);
	}
	data.forEach(function(file){
		console.log(file);
	});
});