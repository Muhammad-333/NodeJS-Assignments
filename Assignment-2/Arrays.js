const { log } = require("node:console");

//Question1) Write a program to print all elements of an array using a for loop.
let myArray = [1,2,3,4,5,45];
for(let i = 0; i<myArray.length;i++){
    console.log(myArray[i]);
}
let count = 0;
for(let num of myArray){
    count++;
}
console.log("length of array: "+count);

//Question3) Write a function to reverse an array without using .reverse().

function rev(myArray1){
    let left = 0;
    let right = myArray1.length-1;
    while(left<right){
        let temp = myArray1[left];
        myArray1[left] = myArray1[right];
        myArray1[right] = temp;

        left++;
        right--;
    }
    return myArray1;
}
let myArray1 = [10,20,30,40,50];
console.log("reverse array: "+rev(myArray1));

//Question4) Calculate the sum of all numbers in an array.
let array = [33,45,65,78,95];
let sum = 0;
for(let j = 0;j<array.length;j++){
    sum+=array[j];
}
console.log("sum: "+sum);


//Question5) Write a program to filter only even numbers from an array.
let array1 = [1,2,3,4,5,6,7,8,9,10];
for(let num of array1){
    if(num % 2 == 0){
        console.log(num);
    }
}


