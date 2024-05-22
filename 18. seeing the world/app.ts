//18. seeing the world: Think of at least five places in the world you'd like to visit.
// . store the location in a array .Make sure the array is not in alphabetical order.
// . print your array in its original order.

let places :  string [] = ['cap town','delhi','faisalbad','bankok','ahmedabad'];
console.log('original:' + places);
// print your array in alphabetical order without modifying the actual list.
console.log('copy ' + [...places].sort()); 

// . show that your array is still in its original order by printing it.
console.log('original :' + places);

// . print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy' + [...places].sort().reverse());

// . show that your array is still in its original order by printing it again.
console.log('copy' + [...places].sort().reverse());

// . Reverse the order of your list. print the array to show that its order has changed.
console.log('original :' + places.sort());

// . Reverse the order of your list again. print the list to show it's back to its original order.
console.log('original :' + places.sort().reverse());