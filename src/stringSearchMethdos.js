// string search methods

const str = "this is a test";

/**
 * starts with returns true if given string is found at starting of parent string
 * else returns false
 */
console.log(str.startsWith("th"));
console.log(str.startsWith("a"));

/**
 * endsWith returns true if given string is found at end of parent string
 * else return false
 */
console.log(str.endsWith("t"));
console.log(str.endsWith("g"));

/**
 * includes returns true if given string is found anywhere in provided string
 * else return false
 */
console.log(str.includes("is"));
console.log(str.includes("the"));

/**
 * serach return the index of first occurence of provided string in parent string
 * else return -1
 */
console.log(str.search("is"));
console.log(str.search("the"));
console.log(str.search("a"));
console.log(str.search("z"));
