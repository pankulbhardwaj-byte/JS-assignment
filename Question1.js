Question 1 

let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));
let finalCount = 0;
function checkPrime(num) {
    if (num <= 1) {
        return false;
    }
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}
for (let i = L; i <=R; i++) {
    if (i % K == 0) {
        let strNum = i.toString();
        let hasZero = false;
        let sumOfDigits = 0;
        for (let j = 0; j < strNum.length; j++) {
            if (strNum[j] == '0') {
                hasZero = true;
            }
            sumOfDigits = sumOfDigits + parseInt(strNum[j]);
        }
        if (hasZero == false) {
            if (checkPrime(sumOfDigits) == true) {
                finalCount++;
            }
        }
    }
}
alert(finalCount);
