/*
working with one of the program from exercise 14 through 18, print a
message indicating the number of people you are inviting to dinner.
*/

let myFriends: string [] = ['Ali','Ahmed','waqar','Manzoor','Tariq'];
console.log(`I am inviting ${myFriends.length}number of friends to my dinner
which are following\n`)
for(let i = 0; i< myFriends.length; i++){
    console.log(`${i + 1}.${myFriends[i]}`)
}
