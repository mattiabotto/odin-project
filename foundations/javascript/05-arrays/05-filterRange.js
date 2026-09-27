/**
 * Take an array and filter elements that are in range (a : b), both included
 * Returns a new array, don't modify the original
 */
function filterRange(arr, a, b) {
  return arr.filter((item) => (a <= item && item <= b));
}