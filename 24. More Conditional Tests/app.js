var car = 'subaru';
var age = 25;
var numbers = [1, 2, 3, 4];
// **string Tests**
//Tests 1: Equality (True)
console.log("Is car == 'Subaru'? I predict True.");
console.log(car == 'subaru'); // True (case-insensitive)
// Test 2: strict equality (false)
console.log("Is car == 'subaru'? I predict False.");
console.log(car === 'subaru'); // false (case-sensitive)
// Test 3: Inequality (True)
console.log("Is car !== 'Toyota'? I predict True.");
console.log(car !== 'Toyota'); // True
//Test 4: Inequality (false)
console.log("Is car !=='subaru'? I predict False.");
console.log(car !== 'Subaru'); // False (case-sensitive)
//**Lowercase Function Tests**
//Test 5: Lowercase conversion (True)
console.log("Is car.tolowercase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru'); // True (converted to lower case)
//Test 6: Lowercase conversion (false)
console.log("Is car === car.tolowercase ()? I predict False.");
console.log(car === car.toLowerCase()); // false (original value remains uppercase)
// **Numerical Tests***
//Test 7: Equality (True)
console.log("Is age == 25? I predict True.");
console.log(age == 25); // True
// Test 8: Inequality (false)
console.log("Is age != 30? I predict True.");
console.log(age != 30); // true
//Test 9: Greater than (false)
console.log("Is age > 30? I predict false.");
console.log(age > 30); // false
//Test 10: less than or equal (True)
console.log("Is age <= 25? I predict True.");
console.log(age <= 25); // True
//**Logical operators**
//Test 11: AND (True)
console.log("Is age > 20 && age < 30? I predict True.");
console.log(age > 30 || age < 30); // True (both conditions met)
//Test 12: oR (false)
console.log("Is age > 30 || age < 18? I predict false.");
console.log(age > 30 || age < 18); // false (neither condition met)
//*Array Tests**
//Tests 13: in array (True)
console.log("Is 3 in number? I predict True.");
console.log(3 in numbers); // True (checks for index existence)
// Test 14: not in array (false)
console.log("Is 5 not in numbers? I predict True.");
console.log("5 not in numbers"); //True (negation of "in" operator)
