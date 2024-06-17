/**
 * Symbols are primitive type given in ES6
 * These are used for unique IDs
 * Created using Symbol()
 *
 * Symbol() always returns an unique value i.e. you can not create the same symbol twice
 *
 * typeof Symbol() is object
 */

const id = Symbol();
const id2 = Symbol();

console.log(id === id2); //false

let courseInfo = {
  title: "JS",
  topics: ["strings", "array"],
};

courseInfo[id] = 341;

console.log(courseInfo); //  {title: 'JS', topics: Array(2), Symbol(): 341}

courseInfo = { ...courseInfo, id: 45 };

console.log(courseInfo); //{title: 'JS', topics: Array(2), id: 45, Symbol(): 341}

console.log(courseInfo.id); //45

console.log(courseInfo["id"]); //45

console.log(courseInfo[id]); //341

courseInfo[id2] = 21;

console.log(courseInfo); //{title: 'JS', topics: Array(2), id: 45, Symbol(): 341, Symbol(): 21}
