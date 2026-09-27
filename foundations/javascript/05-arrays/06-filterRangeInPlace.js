/**
 * Remove from an array all elements that are not in range (a : b), both included
 * Modifies the original array, doesn't return a new!
 */
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || b < arr[i]) {
      arr.splice(i, 1); // Remove the item
      i--; // Next iteration on the same index, because elements shift to the removed index
    }
  }
}