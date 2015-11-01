// Return a function that takes a list of valid users,
// and returns a function that returns true if all of the supplied users
// exist in the original list of users.


// ## Example

//     var goodUsers = [
//       { id: 1 },
//       { id: 2 },
//       { id: 3 },
//       // { id: 4 }
//     ]
    
//     // `checkUsersValid` is the function you'll define
//     var testAllValid = checkUsersValid(goodUsers)
    
//     console.log(testAllValid([
//       { id: 2 },
//       { id: 1 }
//     ]));
//     // => true
    
//     console.log(testAllValid([
//       { id: 2 },
//       { id: 4 },
//       { id: 1 }
//     ]));
//     // => false


    function checkUsersValid(goodUsers) {
      return function(submittedUsers) {
       	return submittedUsers.every(function(submit) {
        	return goodUsers.some(function(good) {
        		return good.id === submit.id;
        	});
        });
       }
   }
        
    
    module.exports = checkUsersValid;