// Creating a function with parameters which return a values in string
function city_country(city, country) {
    return "".concat(city, " , ").concat(country);
}
// calling a function and print the returned value
console.log(city_country("karachi", "pakistan"));
console.log(city_country("Tokyo", "japan"));
console.log(city_country("Berlin", "Germany"));
