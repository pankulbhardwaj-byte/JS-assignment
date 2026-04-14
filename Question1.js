function isPrime(n){
    if (n<2) return false;

    for (let i=2;i*i<=n;i++){
        if(n%i===0) return false;
    }
    return true;
}
function containsZero(x){
    return x.toString().includes('0');
}
function digitSum(x){
    let sum=0;
    let str=x.toString();
    for(let q of str){
        sum+=Number(q);
    }
    return sum;
}
function isValid(x,K) {
    return x%K===0 && !containsZero(x) && isPrime(digitSum(x));
}
function countValid(L,R,K){
    let count=0;
    for(let i=L;i<=R;i++){
        if(isValid(i,K)) count++;
    }
    return count;
}

let L=Number(prompt("Enter L:"));
let R=Number(prompt("Enter R:"));
let K=Number(prompt("Enter K:"));

let result=countValid(L,R,K);
alert("Result: "+result);
