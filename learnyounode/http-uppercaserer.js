var http = require('http');

http.createServer(function(req, res){
	var cache = '';
	if (req.method === 'POST') {
		res.writeHead(200);
		req.on('data', function(chunk){
			cache += chunk.toString();
		});
		req.on('end', function(){
			res.write(cache.toUpperCase());
			res.end();
		});
	}
}).listen(process.argv[2]);