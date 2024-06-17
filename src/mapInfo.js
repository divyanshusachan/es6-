/**
 * map object has key value pairs
 *
 * difference between map and object
 * - in a map we can use both a primitive value or an object for key or value instead in object only primitive values can be used for keys
 *
 */

// instantiating a map

let course = new Map();

let course1 = new Map([
  ["key", "value"],
  [2, { objectkey: "object key value" }],
]);

// set/creating key value pairs in a map
//  <mapName>.set(<key>, <value>)

course.set("key", "primitive key using string type");
course.set({ a: "b" }, "object key using object");

console.log(course);
// new Map([
//   [
//       "key",
//       "primitive key using string type"
//   ],
//   [
//       {
//           "a": "b"
//       },
//       "object key using object"
//   ]
// ])

//accessing keys -- keys can not be accessed in similar way as object
console.log(course.key); //undefined

console.log(course.get("key")); //primitive key using string type

//get map size
console.log(course.size); //2

//iterating over a map -- here item is the value correspoding to each of the keys present in the map. Unlike objects where the key value pairs can come in any order, in case of maps these are iterated in the order or insertion.
course1.forEach((item, key) => {
  console.log(key + "---" + item);
});
