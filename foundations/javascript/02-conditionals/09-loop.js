// Ask for n and output prime numbers between 2 and n (using loops)

const n = prompt('N:');

nextPrime: 
for (let i = 2; i <= n; i++) {
    
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }

    alert(i);
}