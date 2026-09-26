function sumInput() {
  
  let arr = [];
  let input;
  while(true) { // Stop asking when a non-numeric value, empty string or "Cancel" are pressed

    input = prompt('Enter a number to be summed: ');

    // Check if input is not void ('' or Cancel) or non-numeric (+input then returns NaN)
    if (!input || isNaN(+input)) break;
    
    arr.push(+input);
  } 

  let sum = 0;
  for (let num of arr) {
    sum += num;
  }

  return sum;
}

let sum = sumInput();
alert(`Sum is: ${sum}`);