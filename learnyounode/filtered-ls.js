var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, data){
	data.forEach(function(e){
		if (path.extname(e) === '.' + process.argv[3]) {
			console.log(e); }
	});
});
