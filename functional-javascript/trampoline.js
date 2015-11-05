// # Task

// Modify the boilerplate below such that it uses a trampoline
// to continuously call itself synchronously.

// You can assume that the operation passed to repeat does
// not take arguments (or they are already bound to the function)
 // and the return value is not important.


// ## Boilerplate

//     function repeat(operation, num) {
//       // Modify this so it doesn't cause a stack overflow!
//       if (num <= 0) return
//       operation()
//       return repeat(operation, --num)
//     }
    
//     function trampoline(fn) {
//       // You probably want to implement a trampoline!
//     }
    
//     module.exports = function(operation, num) {
//       // You probably want to call your trampoline here!
//       return repeat(operation, num)
//     }


    function repeat(operation, num) {
      // Modify this so it doesn't cause a stack overflow!
      var a = trampoline(operation);
      for (var i = 0; i < num; i++) {
        a();
      }
    }
    
    function trampoline(fn) {
      // You probably want to implement a trampoline!
      return function(){
        fn();
      }
    }
    
    module.exports = function(operation, num) {
      // You probably want to call your trampoline here!
      // trampoline(operation);
      return repeat(operation, num)
    }
    

