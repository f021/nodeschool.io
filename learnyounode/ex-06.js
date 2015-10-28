var fs = require('fs');
var p = require('path');

var fn = function(path, ext, callback) {
	fs.readdir(path, function(err, data){
		if (err) { 
			callback(err);
		} else {
			callback(null, data.filter(function(file){
				return p.extname(file)  === '.' + ext;
			}));
//			data.forEach(function(file){
//				if (p.extname(file) === '.' + ext) callback(null, file);
//			});
		};
	})

}


module.exports = fn;
