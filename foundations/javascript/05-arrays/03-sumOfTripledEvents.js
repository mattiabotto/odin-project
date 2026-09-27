/**
 * Rewrite this function using the map, filter and reduce methods:
 * 
 * function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // Step 1: If the element is an even number
    if (array[i] % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = array[i] * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}
 */


/**
 * My solution:
 * Take an array and multiply his even elements by three
 * Then sum up those elements and return the sum
 */
function sumOfTripledEvens(array) {
  let evenArray = array.filter(num => num % 2 === 0);
  let tripledArray = evenArray.map(num => num * 3);
  let sum = tripledArray.reduce((total, num) => total + num);

  return sum;
}

// Solution: concatenates methods and uses a bit cleaner variables names, parenthesis on the arguments always
function sumOfTripledEvens_solution(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}