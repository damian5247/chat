var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
var ni='';
  socket.on('user connected', function(nick){
    var connect = nick + ' jest połączony!';
    io.emit('user connected', connect);
    ni=nick;
    return ni;
    console.log(nick+' jest połączony!')
  });
  socket.on('chat message', function(msg){
    msg=ni + ": " + msg;;
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
