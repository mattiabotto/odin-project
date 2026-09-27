// Return an array with unique items of arr
function unique(arr) {
  let uniqueArr = [];

  arr.forEach((item) => {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  });

  return uniqueArr;
}

// Another possible solution with for of loop, mayble more clear:

function unique_solution(arr) {
  let result = [];

  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}