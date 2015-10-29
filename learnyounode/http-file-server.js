var fs = require('fs');
var http = require('http');

http.createServer(function(req, res){
	req.on('connect', function(){
		console.log('connerct');
	})

}).listen(process.argv[2]);