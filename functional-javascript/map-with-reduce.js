// # Task

// Use Array#reduce to implement a simple version of Array#map.

// ## Expected Output

// A function map that applies a function to each item
// in an array and collects the results in a new Array.

    
//     var nums = [1,2,3,4,5]
    
//     // `map` is your exported function
//     var output = map(nums, function double(item) {
//       return item * 2
//     })
    
//     console.log(output) // => [2,4,6,8,10]



	module.exports = function(arr, fn) {
		return arr.reduce(function(a, elm) {
			return a.concat(fn(elm));
		}, []);
	}