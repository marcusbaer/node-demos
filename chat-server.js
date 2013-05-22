var net = require('net')

var sockets = [];

//var s = net.createServer(function(socket) {
var s = net.Server(function(socket) { // Server = createServer
	sockets.push(socket); // everytime someone connects to server, add him to array of clients
	
	socket.on('data', function(d) { // everytime someone sends data, write that data to all clients
		for (var i = 0; i < sockets.length; i++) {
			if (sockets[i] == socket) continue; // do not send my own messages back to me
			sockets[i].write(d);
		}
	});
	
//	socket.on('close', function() {
	socket.on('end', function() { // everytime someone end connection, remove him from client list to avoid dead sockets (which crashes)
		var i = sockets.indexOf(socket);
		sockets.splice(i, 1);
	});
	
});

s.listen(8000);

// telnet localhost 8000