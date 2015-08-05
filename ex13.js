var http = require('http')
var url = require('url')
var server = http.createServer(function(request,response){
  if(request.method != 'GET')
    return response.end('send me a GET\n')
  response.writeHead(200, { 'Content-Type': 'application/json' })
  var u = url.parse(request.url,true)
  var day = new Date(u.query.iso)
  if(u.pathname=="/api/parsetime"){
    response.end('{\"hour\":'+day.getHours()+',\"minute\":'+day.getMinutes()+',\"second\":'+day.getSeconds()+'}')
  }
  else if(u.pathname=="/api/unixtime"){
    response.end('{\"unixtime\":'+day.getTime()+'}')
  }
  else {
    response.writeHead(404)
    response.end()
  }
})
server.listen(process.argv[2])
