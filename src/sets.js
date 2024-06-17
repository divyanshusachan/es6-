/**
 *
 * the set object lets you store unique values that can be both primitive and object references
 *
 * you can iterate through the elements of a set in the order of insertion
 *
 * set's has method checks if a value is in the set or not. This is faster than the Array.prototype.includes method when an array length is equal to set's size
 *
 *
 */

//instantiating a set
const set1 = new Set();
set1.add(2);
set1.add("q");

const set2 = new Set([1, "a", { a: "c" }]);

console.log(set1); // Set(2) {2, 'q'}
console.log(set2); // Set(3) {1, 'a', {…}}
// new Set([
//   1,
//   "a",
//   {
//       "a": "c"
//   }
// ])

//iterating through set values -- return values in the order of insertion
set2.forEach((val) => console.log(val));
// 1
// a
// {a: 'c'}

//checking if a value is present in a set
// return true if value is found
// else returns false
console.log(set1.has(2)); //true
console.log(set1.has(1)); // false

// getting the number of values in set'
// set is a property of the set and not a function of set
console.log(set1.size);

// deleting a value from set
set1.delete(2);
console.log(set1); //Set(1) {'q'}
