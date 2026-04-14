Question 3 

let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));
let answer = -1;
for (let X = 0; X <= 100000; X++) {
    let num = N + X;
    if (num % K !== 0) continue;
    let original = num;
    let rev = 0;
    let temp = num;
    while (temp > 0) {
        rev = rev * 10 + (temp % 10);
        temp = Math.floor(temp / 10);
    }
    if (original === rev) {
        answer = X;
        break;
    }
}
alert(answer);


