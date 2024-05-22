"use strict";
// . Make a list of five or more usernames called current-users
// . make another list of five usernames called new_users.make sure one or two of the new usernames are also in the current_users.
// . loop through the new_users list to see if each new username has already been used.if it has,print a message 
let current_users = ['Taha', 'Daniyal', 'salman', 'hamzah', 'john'];
// . make another list of five usernames called new_users. make sure one or two of the new usernames are also in the current_users list.
let new_users = ['Bilal', 'Taha', 'Dawood', 'jameel', 'Hamzah'];
new_users.forEach(newUsername => {
    let lowerCase = newUsername.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUsername} is not available. please write a different username`);
    }
    else {
        console.log(`The username ${newUsername} is available.`);
    }
});
