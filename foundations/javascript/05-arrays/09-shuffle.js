// Shuffle elements in an array randomly
// not really that random, as can be seen from the testing down below
function shuffle(array) {
  array.forEach(
    (item, i) => { // Remove a random item from array and switch with current item
      // Since splice returns an array with the elements removed, we need to access to its only element before assigning
      // ex. (arr = [1, 2, 3]); arr.splice(2, 1, arr[0] === [3])
      array[i] = array.splice(getRandomInt(array.length), 1, item)[0];
    }
  );
}


function shuffle_solution(array) {
  // Use the Fisher-Yates shuffle: swap elements in reverse order with a random one before it
  for (let i = array.length - 1; i > 0; i--) {
    let j = getRandomInt(i + 1);
    // Swap with destructuring assignment syntax
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getRandomInt(n) {
    return Math.floor(Math.random() * n);
}

// counts of appearances for all possible permutations
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle_solution(array);
  count[array.join('')]++;
}

// show counts of all possible permutations
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}