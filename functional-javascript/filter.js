// Use Array#filter to write a function called getShortMessages.
// 
// getShortMessages takes an array of objects with '.message' 
// properties and returns an array of messages that are less than < 50 characters long.


function getShortMessages(msgs) {
	return msgs.map(function(elm) {
		return elm.message;
	}).filter(function (elm) {
		return elm.length < 50;
	});
}

module.exports = getShortMessages;