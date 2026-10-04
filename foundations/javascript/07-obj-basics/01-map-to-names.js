// Map an array of objects to an array of names

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

function mapToNames(arr) {
  let names = [];
  for (let person of arr) {
    names.push(`${person.name}`);
  }

  return names;
}

console.log(mapToNames(users));

// Simpler solution
let names = users.map(user => user.name);