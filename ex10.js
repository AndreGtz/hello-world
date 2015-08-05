var net = require('net')
function zeroFill(number){
  number=String(number)
  return number.length>1?number:"0"+number;
}
var server = net.createServer(function(socket){
  //socket handling
  var date = new Date()
  socket.end(date.getFullYear()+"-"+zeroFill(date.getMonth()+1)+"-"+zeroFill(date.getDate())+" "
            +zeroFill(date.getHours())+":"+zeroFill(date.getMinutes())+"\n")
})
server.listen(process.argv[2])
