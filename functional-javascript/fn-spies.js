// # Task

// Override a specified method of an object with
// new functionality while still maintaining all of the old
// behaviour.

// Create a spy that keeps track of how many times a function
// is called.

// ## Example

    // var spy = Spy(console, 'error')
    
    // console.error('calling console.error')
    // console.error('calling console.error')
    // console.error('calling console.error')
    
    // console.log(spy.count); // 3


	function Spy(target, method) {
		var spy = { count: 0};
		var oldFn = target[method];
		target[method] = function() {
			spy.count++;
			return oldFn.apply(target, arguments);
		}
		return spy;		
	}

	module.exports = Spy;