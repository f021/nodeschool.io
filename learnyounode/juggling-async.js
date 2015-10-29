var http = require('http');
var urls = process.argv.slice(2);
var count = 0;
var answer = {};

function add(url, data){
	count++;
	answer[url] = data;
	if (count === 3) urls.forEach(function(e){
		console.log(answer[e]);
	});
}

urls.forEach(function(url){
	var buffer = '';
	http.get(url, function(res){
		res.setEncoding('utf-8');
		res.on('data', function(data){
			buffer += data;
		});
		res.on('error', console.error);
		res.on('end', function(){
			add(url, buffer);
		});
	});
});

