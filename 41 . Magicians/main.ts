// Define a function to print each magician name from an array

function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));
}
// Define an array containing magicians name
let magician_names = ["Harry poter","Hamza","usman"]

// call the function to print each magicians name
show_magicians(magician_names)
