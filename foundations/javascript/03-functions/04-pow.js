function pow(x, n) {
    let res = 1;
    for (let i = 0; i < n; i++) {
        res *= x;
    }

    return res;
}

let x = +prompt('x =');
let n = +prompt('n =');

alert(`${x}^${n} = ${pow(x, n)}`);