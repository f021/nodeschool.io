var http = require('http');
var time;


http.createServer(function(req, res){
	var url = require('url').parse(req.url, true);
	res.writeHead(200, {'Content-Type': 'application/json'});
	req.on('connection', function(){
			time = new Data();
	});
	switch(url.pathname){
		case '/api/parsetime':
			time = new Date(url.query.iso);
			res.end(JSON.stringify({
				"hour": time.getHours(),
				"minute": time.getMinutes(),
				"second": time.getSeconds()
			}));
			break;
		case '/api/unixtime':
			res.end(JSON.stringify({
				"unixtime": time.valueOf()
			}));
			break;
		default:
			console.log('Error...');
			break;
	};
}).listen(process.argv[2]);