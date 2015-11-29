var through = require('through2');

// var stream = through(write, end);
//
// the 'write' function is called for every buffer of avaible input:
//
// function write(buffer, encoding, next) {
// 	this.push('I got some date ' + buffee + '\n');
// 	next();
// }

// function end() {
// 	done();
// }
//

process.stdin.pipe(through(function(chunk, enc, callback){
	this.push(chunk.toString().toUpperCase());
	callback();
})).pipe(process.stdout);
