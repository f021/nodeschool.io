// # Task:

// Write a function duckCount that returns the number of
// arguments passed to it which have a property 'quack'
// defined directly on them. Do not match values inherited
// from prototypes.

// ## Conditions

//   * Do not use any for/while loops or Array#forEach.
//   * Do not create any counter/accumulator variables.
//   * Do not create any unecessary functions e.g. helpers.

// Example:

    // var notDuck = Object.create({quack: true})
    // var duck = {quack: true}
    // duckCount(duck, notDuck) // 1


    function duckCount() {
    	var arr = Array.prototype.slice.call(arguments, 0);
    	if (arr.length === 0) return 0;
    	return duckCount.apply(null, arr.slice(1)) + Object.prototype.hasOwnProperty.call(arr[0], 'quack');
    }


    module.exports = duckCount;