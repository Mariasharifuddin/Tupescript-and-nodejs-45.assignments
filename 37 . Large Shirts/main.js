"use strict";
// Making a Function
function make_shirt(size = "large", printMessage = "I love TYpescript") {
    console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt `);
}
// calling a function with by-default values
make_shirt();
// calling a function now with Medium size and default message
make_shirt("Medium");
// calling a function now with small size and different print Message
make_shirt("small", "I love javascript");
