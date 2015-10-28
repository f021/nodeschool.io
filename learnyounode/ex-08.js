var http = require('http');
var collect = [];

http.get(process.argv[2], function(res){

  res.setEncoding('utf8');

  res.on('data', function(data){
  	collect.push(data);
  });
  
  res.on('error', function(err){
  	collect.push(err);
  });
  
  res.on('end', function(end,data){
  	console.log(collect.reduce(function(a,b){
  		return a + b.length;
  	}, 0));
  	console.log(collect.join(''));
  });

 });

