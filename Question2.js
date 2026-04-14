Question 2 

let N = parseInt(prompt("Enter N:"));
let seed = parseInt(prompt("Enter seed:"));
let current = N;
for (let i = 0; i < 3; i++) {
    if (current % 2 == 0) {
        current = current / 2 + seed;
    } else {
        current = current * 3 - seed;
    }
}
let finalNum = current;
let result = "NO";
if (finalNum >= 100 && finalNum <= 999) {
    let middle = Math.floor(finalNum / 10) % 10;
    if (middle == seed) {
        result = "YES";
    }
}
alert(result + ", " + finalNum);


