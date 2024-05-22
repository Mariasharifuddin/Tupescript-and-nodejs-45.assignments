//No users
//Add an if test to exercise 31 to make sure the list of users is not empty.
// If the list is empty,print the message we need to find some users!



let users: string[] = ["Ali", "madad", "Fayaz", "Admin", "Ayaz", "Tariq"];
if(users.length === 0){
    console.log("we need to find some usernames!")
}
// . Remove all of the usernames from your array,
// and make sure the correct message is printed
else{
    users = [];
    console.log("All user have been removed " + users.length)
}