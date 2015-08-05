var http = require('http')
var fs = require('fs')
var file = process.argv[3]
var server = http.createServer(function(request,response){
  //socket handling
  fs.createReadStream(file).pipe(response)

})
server.listen(process.argv[2])
