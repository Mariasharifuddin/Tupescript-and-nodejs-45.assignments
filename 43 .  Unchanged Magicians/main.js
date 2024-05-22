/*
start with your work from question / exercise 42.call the function
make_great() with a copy of the array of magician's names. Because the
original array will be unchanged, return the new array and store it in
a separate array. call show_magicians() with each array to show that
you have one array of the original names and one array with the great
added to each magician's name.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicianNames2 = ["Ayaz", "Fayaz", "Tariq", "mahad"];
// making a copy of an array 
var magicianNamescopy = __spreadArray([], magicianNames2, true);
function show_magicians(greet) {
    var withGreetings = "";
    for (var _i = 0, magicianNamescopy_1 = magicianNamescopy; _i < magicianNamescopy_1.length; _i++) {
        var item = magicianNamescopy_1[_i];
        withGreetings += "".concat(greet);
        console.log(greet, item);
    }
    return withGreetings;
}
;
var myGreetings = show_magicians("Hello");
var makeArray = myGreetings.split('\n');
console.log(makeArray);
console.log(magicianNames2);
