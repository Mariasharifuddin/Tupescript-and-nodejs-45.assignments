function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// function to make magician great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name =>`The Great ${name}`);
}



// Define an array of magicians names

let magicians_names = ["Herry potter","hamza","usman"]

// call make_great function to modify magicians name
let great_magicians = make_great(magicians_names);


// call show_magicians that show modified list of magicians
show_magicians(great_magicians);
