// 30 .Hello Admin: Make a array of five or more username,
// including the name 'admin' Imagine you are writing code
// that will print a greeting to each user after they log in to a website.
// loop through the array, and print a greeting to each user:
// . If the username is 'admin',print a special greeting, such as Hello admin,
// would you like to see a status report?
// . otherwise , print a generic greeting, such as Hello Eric, thank you for
// logging in again.
var userNames = ['sana', 'babar', 'saba', 'taha', 'admin'];
for (var i = 0; i < userNames.length; i++) {
    if (userNames[i] === "Admin") {
        console.log("hello ".concat(userNames[i], " would you like to see a status\n        report?"));
    }
    else {
        console.log("Hello ".concat(userNames[i], " thank you for logging in again!"));
    }
}
