//Q1) Write a program using a for loop to print numbers from 1 to 10.

for(let i=1;i<=10;i++){
    console.log(i);
}

console.log("----------------------------");

//Q2) Use a while loop to calculate the sum of the first N natural numbers.

let sum=0;
let i=1;
while(i<=10){
    sum+=i;
    i++;
}
console.log("sum: ",sum);

console.log("----------------------------");

//Q3) Print the multiplication table of a given number using a for loop.
let num = 5;
for(let i=1;i<=10;i++){
    console.log(num,"x",i,"=",num*i);
}

console.log("----------------------------");

//Q4) Write a program using a while loop to find the factorial of a given number.

let fact=1;
let number=5;
while(number>1){
    fact*=number;
    number--;
}
console.log("factorial",fact);

console.log("----------------------------");

//Q5) Print numbers from 10 down to 1 using a for loop.

for(let i = 10;i>=1;i--){
    console.log(i);
}

console.log("----------------------------");

//Q6) Use a do-while loop to print all even numbers up to N.

let N = 20;
let j = 2;

do {
    console.log(j);
    j += 2;
} while (j <= N);

console.log("----------------------------");


//Q7) Write a program using a while loop to calculate the sum of digits of a given number.
let nums = 222;
let sums=0;
while(nums>0){
    let digits = nums%10;
    sums+=digits;
    nums = Math.floor(nums / 10);
}
console.log("sum of digits: ",sums);

console.log("----------------------------");

//Q8) Generate the first 10 terms of the Fibonacci series using a for loop.

let a = 0;
let b = 1;
let c;
let result = "";

for (let i = 0; i < 10; i++) {
    result += a + " ";

    c = a + b;
    a = b;
    b = c;
}

console.log(result);

console.log("----------------------------");

//Q9) Use a do-while loop to keep asking the user for a number until they guess the correct one.

const readline = require("readline/promises");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function startGame() {
    const correct_number = 30;
    let input_number;

    do {
        let answer = await r1.question("Enter a number: ");
        input_number = Number(answer);

        if (input_number === correct_number) {
            console.log("You won!");
        } else {
            console.log("You lose! Try again.");
        }
    } while (input_number !== correct_number);

    r1.close();
}

startGame();

console.log("----------------------------");


//Q10) Write a program using a for loop to check if a given number is prime.

let p_num = 7;
let isPrime = true;

if (p_num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < p_num; i++) {
        if (p_num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(p_num + " is a prime number.");
} else {
    console.log(p_num + " is not a prime number.");
}