// This code is broken!

// A Java developer has committed this terrible code to our codebase and didn't test it!

//     function loadUsers(userIds, load, done) {
//       var users = []
//       for (var i = 0; i < userIds.length; i++) {
//         users.push(load(userIds[i]))
//       }
//       return users
//     }
    
//     module.exports = loadUsers

// # Task

// Fix this code! The callback should be called with all the users loaded.
// The order of the users should match the order of supplied user ids.
// Because this function is asynchronous, we do not care about its return value.

// ## Arguments

//   * userIds: an Array of numeric user ids.
//   * load: a Function used to load user objects. Expects a numeric id
//   and a callback. The callback will be called with the result of loading
//   the user with the specified id (either a user object or null).
//   * done: a Function that expects an Array of user objects (as retrieved from `load`).

// ## Conditions

//   * Do not use for/while loops (Array#forEach ok).
//   * The order of the results in `done` must be the same as they were specified in `userIds`.
//   * Users should be loaded in parallel i.e. the entire job should not take more than 1 second.
//   * Do not create any unecessary functions e.g. helpers.

    function loadUsers(userIds, load, done) {
      // console.log(userIds);
      // load(userIds[0], done);
      return userIds.map(function(user) {
        return load(user);
      });
    }
    
    module.exports = loadUsers;