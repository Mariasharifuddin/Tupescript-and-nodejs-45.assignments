function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magician great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magicians_names = ["Herry potter", "hamza", "usman"];
var great_magicians = make_great(magicians_names);
show_magicians(great_magicians);
