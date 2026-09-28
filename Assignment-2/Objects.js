//Question1) Create an object student with properties name, age, and grade. Print each property.

const student ={
    name:"Ali",
    age: 20,
    grade:'A'
};

console.log(Object.entries(student));

//Question2) Write a program to loop through all keys and values of an object using for...in.

const obj = {
    name: "Ahmed",
    age: 18,
    grade: 'B'
};

for(let i in obj){
    console.log(`${i}:${obj[i]}`);
}

//Question3) Create an object calculator with methods add, subtract, multiply, and divide. Demonstrate usage.

const calculator = {
    add:function(a,b){
        return a+b
    },
    subtract: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    }
};

console.log("Addition:", calculator.add(10, 5));        
console.log("Subtraction:", calculator.subtract(10, 5)); 
console.log("Multiplication:", calculator.multiply(10, 5)); 
console.log("Division:", calculator.divide(10, 5));

//Question4) Write a program to access values inside a nested object (e.g., student.address.city).

const nstudent = {
    name:"Ali",
    age:20,
    address:{
        city:"Karachi",
        street: "123 main st"
    }
};

console.log(nstudent.address.city);

//Question5) Convert an object’s keys and values into separate arrays.

const arr_obj = {
    name: "Ahmed",
    age: 18,
    grade: 'B'
};
console.log(Object.entries(arr_obj));
