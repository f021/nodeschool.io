// # Task

// Given an Array of strings, use Array#reduce to create an object
// that contains the number of times each string occured in the array.
// Return the object directly (no need to console.log).

// ## Example

    // var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
    
//     console.log(countWords(inputWords))
    
    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }



    function countWords(inputWords) {
      return inputWords.reduce(function(obj, elm) {
      	if (obj[elm] === undefined) {
      		obj[elm] = 1;
      	} else {
      		obj[elm]++;
      	};
      	return obj;
      }, {})
    }
    
    module.exports = countWords;