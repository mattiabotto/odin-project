/**
 * Algorithm 1 (should be O(n^2):
 * 
 * 1. Set maxSum = 0
 * 2. outer loop, from 0 to N:
 *      set sum = 0;
 *      inner loop, from i to N:
 *        add value to sum
 *        if sum > maxSum:
 *        maxSum = sum
 * 3. return maxSum       
 */
function getMaxSubSum(arr) {
  let maxSum = 0;
  const N = arr.length;

  for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = i; j < N; j++) {
      sum += arr[j];
      if (sum > maxSum) maxSum = sum;
    }
  }
  
  return maxSum;
}