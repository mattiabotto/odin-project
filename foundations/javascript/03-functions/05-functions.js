function add7(num) {
    return num + 7;
}

function mult(a, b) {
    return a * b;
}

function capitalize(string) {
   return string.at(0).toUpperCase() + string.slice(1);
}

function lastLetter(string) {
    return string.at(-1);
}

console.log(add7(10));
console.log(mult(10, 2));
console.log(capitalize('word'));
console.log(capitalize('Word'));
console.log(capitalize('wOrD'));
console.log(lastLetter('abcd'));