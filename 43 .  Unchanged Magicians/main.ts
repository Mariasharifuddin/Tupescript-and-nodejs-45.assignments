/* 
start with your work from question / exercise 42.call the function
make_great() with a copy of the array of magician's names. Because the 
original array will be unchanged, return the new array and store it in
a separate array. call show_magicians() with each array to show that
you have one array of the original names and one array with the great 
added to each magician's name.
*/

let magicianNames2 = ["Ayaz","Fayaz","Tariq","mahad"];

// making a copy of an array 
let magicianNamescopy = [...magicianNames2];

function show_magicians(greet: string){
    let withGreetings = "";
    for(let item of magicianNamescopy){
    withGreetings += `${greet}`
        console.log(greet, item);
    }
    return withGreetings;
};

let myGreetings = show_magicians("Hello");
let makeArray = myGreetings.split('\n');
console.log(makeArray);
console.log(magicianNames2);
