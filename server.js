var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

io.sockets.on('connection',function(client){
	console.log('Client connected from address ' , client.handshake.address);	
	client.emit('messages',{hello:'world'});
});
// app.set('views', __dirname + '/views');
// app.set('view engine', 'jade');
// app.set("view options", { layout: false });
app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res){
//   res.render('index.html');
// });

server.listen(8080,function(){
	console.log("Listening on 8080");
});