let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

// Map to an array of objects, each of it has and id and a fullName
let usersMapped = users.map(user => {
  let userMapped = {
    'fullName': `${user.name} ${user.surname}`,
    'id': user.id
  };

  return userMapped;
});

// Same, but more concise
usersMapped = users.map(user => ({
    'fullName': `${user.name} ${user.surname}`,
    'id': user.id
  }));


console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith