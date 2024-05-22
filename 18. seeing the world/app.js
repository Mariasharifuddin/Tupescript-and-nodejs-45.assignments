//18. seeing the world: Think of at least five places in the world you'd like to visit.
// . store the location in a array .Make sure the array is not in alphabetical order.
// . print your array in its original order.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ['cap town', 'delhi', 'faisalbad', 'bankok', 'ahmedabad'];
console.log('original:' + places);
// print your array in alphabetical order without modifying the actual list.
console.log('copy ' + __spreadArray([], places, true).sort());
// . show that your array is still in its original order by printing it.
console.log('original :' + places);
// . print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy' + __spreadArray([], places, true).sort().reverse());
// . show that your array is still in its original order by printing it again.
console.log('copy' + __spreadArray([], places, true).sort().reverse());
// . Reverse the order of your list. print the array to show that its order has changed.
console.log('original :' + places.sort());
// . Reverse the order of your list again. print the list to show it's back to its original order.
console.log('original :' + places.sort().reverse());
