let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

// From an array of objects with the id property (supposed to be unique) 
// create an object with ids as keys and the array elements as values
function groupById(arr) {
  return arr.reduce((obj, current) => {
    obj[current.id] = current; // Each iteration we create a key:value pair as 'id': obj
    return obj; // We need to return the object on each iteration, otherwise obj will be assigned undefined
  }, {});
}

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/