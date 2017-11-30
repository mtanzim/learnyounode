var net = require('net')  
var server = net.createServer(function (socket) {  
  // socket handling logic
  var data= new Date;
  var year=data.getFullYear().toString();
  var month=(parseInt(data.getMonth().toString())+1).toString();
  var day=data.getDate().toString();
  var hour=data.getHours().toString();
  var min=data.getMinutes().toString();
  socket.end(year+'-'+month+'-'+day+' '+hour+':'+min+'\n');
  //socket.end(data.getMonth().toString());
     
})  
server.listen(process.argv[2]); 