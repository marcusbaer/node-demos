var s = http.createServer(function(req, res) {
	res.writeHead(200, { 'content-type': 'text/plain' });
	res.write("hello\n");
	setTimeout(function() {
		res.end("world\n");
	}, 2000);
});

s.listen(8000);

// curl http://localhost:8000/
// ab -n 100 -c 100 http://127.0.0.1:8000/ (ApacheBench)