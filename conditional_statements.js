//Q1) Write a program that checks if a number is positive, negative, or zero.

let num = 10;
if (num > 0) {
    console.log("number is positive")
} else if (num < 0) {
    console.log("number is negative")
} else {
    console.log("number is zero")
}

console.log("----------------------------");




//Q2) Using an if-else statement, determine whether a given integer is even or odd.

let number = 4;
if (number % 2 === 0) {
    console.log("number is even")
} else {
    console.log("number is odd")
}

console.log("----------------------------");



//Q3) Write a program that takes two numbers and prints the larger one using conditional statements.

let num1 = 10;
let num2 = 5;
if (num1 > num2) {
    console.log(num1)
} else {
    console.log(num2)
}

console.log("----------------------------");



//Q4) Using if-else-if, assign grades (A, B, C, D, F) based on a student’s percentage score.

let percentage = 80;
if (percentage >= 80) {
    console.log("Grade: A")
} else if (percentage < 80 && percentage >= 70) {
    console.log("Grade: B")
} else if (percentage < 70 && percentage >= 60) {
    console.log("Grade: C")
} else if (percentage < 60 && percentage >= 50) {
    console.log("Grade: D")
} else if (percentage < 50 && percentage >= 40) {
    console.log("Grade: E")
} else {
    console.log("Grade: F")
}

console.log("----------------------------");



//Q5) Write a program that checks if a given year is a leap year using conditional statements.

let year = 2024;
if (year % 4 === 0) {
    console.log("It's a leap year")
} else {
    console.log("It's not a leap year")
}

console.log("----------------------------");



//Q6) Use a switch-case to print the name of the day when given a number (1 = Monday, 2 = Tuesday, … 7 = Sunday).

let day = 7;
switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
}

console.log("----------------------------");



//Q7)Create a simple calculator using switch-case that performs addition, subtraction, multiplication, or division based on user input.

let number1 = 5;
let number2 = 5;
let operator = '+';
switch (operator) {
    case '+':
        console.log(number1 + number2);
        break;

    case '-':
        console.log(number1 - number2);
        break;

    case '*':
        console.log(number1 * number2);
        break;

    case '/':
        console.log(number1 / number2);


}

console.log("----------------------------");



//Q8) Write a program that checks whether a given character is a vowel or consonant using switch-case.

let char = 'a';
switch (char) {
    case 'a':
        console.log("vowel");
        break;

    case 'e':
        console.log("vowel");
        break;

    case 'i':
        console.log("vowel");
        break;

    case 'o':
        console.log("vowel");
        break;

    case 'u':
        console.log("vowel");
        break;

    default:
        console.log("consonant");
}

console.log("----------------------------");


//Q9) Using switch-case, print instructions based on traffic light color (Red = Stop, Yellow = Wait, Green = Go).

let light_color = 'Red';
switch (light_color) {
    case 'Red':
        console.log("Stop");
        break;

    case 'Yellow':
        console.log("Wait");
        break;

    case 'Green':
        console.log("Go");

}


console.log("----------------------------");



//Q10) Write a program using switch-case where the user selects from a menu (e.g., 1 = Check Balance, 2 = Deposit, 3 = Withdraw, 4 = Exit).

const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let balance = 5000;
console.log("Choices:");
console.log("1)Check balance");
console.log("2)Deposit");
console.log("3)Withdrawl");
console.log("4)Exit");

r1.question("Enter your choice: ", (choice) => {

    switch (choice) {
        case "1":
            console.log(balance);
            break;
            r1.close();

        case "2":
            r1.question("Enter amount to deposit", (amount) => {
                amount = Number(amount);
                balance += amount;
                console.log("New balance: ", balance);
                r1.close();


            });
            return;


        case "3":
            r1.question("Enter amount to withdraw", (amount) => {
                amount = Number(amount);
                balance -= amount;
                console.log("New balance: ", balance);

                r1.close();
            });
            return;

        case "4":
            console.log("Exit");
            break;
            r1.close();

        default:
            console.log("Invalid choice");
            r1.close();
    }

});
