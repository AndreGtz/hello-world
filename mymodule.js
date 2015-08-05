var fs = require('fs');
module.exports = function(file,extension,callback){
	fs.readdir(file,function (err,buffer){
		if(err){
			return callback(err);
		}
		var re = new RegExp('\.'+extension+"$");
		var data="";
		for(var i = 0; i<buffer.length;i++){
			try{
				if(re.test(buffer[i])){
					data+=buffer[i]+" ";
				}
				
			}catch(e){}

		}
		var data = data.split(" ");
		callback(null,data.slice(0,data.length-1));
		
	})

}
/*
var fs = require('fs')
    var path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
    
      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }
*/