var car = 'subaru';
// Test 1: Equality comparison (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
// test 2: Strict equality comparison (True)
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // True
// Test 3: Inequality comparison (False)
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); //False
// Test 4: Strict Inequality comparison (False)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); //False
// Test 5: Less than comparison (False)
console.log("Is car < 'subaru'? I predict False.");
console.log(car < 'subaru'); // False (lexicographic comparison)
// Test 6: Greater than comparison (false)
console.log("Is car > 'subaru'? I predict false.");
console.log(car > 'subaru'); //False (lexicographic comparison)
// Test 7: Less than or equal comparison (True)
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru'); // True
// Test 8: Greater than or equal comparison (True)
console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= 'subaru'); // True
// Test 9: Checking truthiness (True)
console.log("Is car? I predict True.");
console.log(car); // True (non-empty string is truthly)
// Test 10: Checking Falseness (False)
console.log("Is !car? I predict False.");
console.log(!car); // False (negation of a truthly value)
