/*
Write a function that stores information about a car in an object. The
function should always receive a manufacture and a model name. It
should then accept an arbitrary number of keyboard arguments. call the
function with the required information and two other name-value pairs,
such as a color or an optional feature . print the object that's returned to make
sure all the information was stored correctly*/
function carDetails(manufacturer: string, modelName: string, ...additionalInfo: [string, any][] ){
    const car = {manufacturer, modelName, ...Object.fromEntries(additionalInfo)};
    
    return car;
};

const myCarDetails = carDetails("Toyota", "corolla", ['color', 'blue'], ['year', 2022]);

console.log(myCarDetails);

console.log(Object.fromEntries);





