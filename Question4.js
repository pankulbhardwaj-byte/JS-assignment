Question 4 

let base = parseInt(prompt("Enter base:"));
let distance = parseInt(prompt("Enter distance:"));
let minutesLate = parseInt(prompt("Enter minutesLate:"));
let seed = parseInt(prompt("Enter seed:"));
let fare = base + 7 * distance;
if (minutesLate > 15) {
    fare = fare + 20;
}
if (distance > 10) {
    let extra = Math.floor((10 * fare) / 100);
    fare = fare + extra;
}
if (seed % 2 != 0) {
    fare = fare - seed;
} else {
    fare = fare + seed;
}
while (fare % 5 != 0) {
    fare++;
}
alert(fare);


