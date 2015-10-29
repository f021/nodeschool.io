var net = require('net');

function fn(a) {
	if (a < 10) {
		return '0' + a;
	} else {
		return '' + a;
	};
}

function dateToString(){
	var time = new Date();
	return '' + time.getFullYear() + '-'
			  + fn(time.getMonth()+1) + '-'
			  + fn(time.getDate()) + ' '
			  + fn(time.getHours()) + ':'
			  + fn(time.getMinutes());
}

net.createServer(function(socket){
	socket.end(dateToString() + '\n');
}).listen(process.argv[2]);