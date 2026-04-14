Question 5 

let N = parseInt(prompt("Enter N:"));
let seed = parseInt(prompt("Enter seed:"));
let m = 0;
let sum = 0;
let skip = seed + 2;
while (sum < N) {
    m++;
    if (m % skip != 0) {
        sum = sum + m;
    }
}
alert(m + " " + sum);


