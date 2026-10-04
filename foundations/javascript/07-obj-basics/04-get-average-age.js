let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// Return the average age of an array of objects with the property age
function getAverageAge(arr) {
  return arr.reduce((sum, current) => sum + current.age, 0) / arr.length;
}