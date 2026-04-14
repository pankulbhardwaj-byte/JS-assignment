Question 6 

let a = parseInt(prompt("Enter correct answers:"));
let b = parseInt(prompt("Enter partial answers:"));
let c = parseInt(prompt("Enter wrong answers:"));
let score = 3 * a + b - 2 * c;
if (score < 0) {
    score = 0;
}
if (a + b + c > 50) {
    score = score - 10;
}
let status = "FAIL";
if (score >= 60) {
    status = "PASS";
}
alert(score + ", " + status);
