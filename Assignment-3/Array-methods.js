//Q1) You have `const fruits = ['Apple', 'Banana'];`. Add `Mango` and `Orange` to the end of the same array.

// const fruits = ['Apple', 'Banana'];
// fruits.push('Mango','Orange');
// console.log(fruits);


//Q2) Given `const tasks = ['Login', 'Dashboard', 'Logout'];`, remove the last task and store the removed value in a separate variable.

// const tasks = ['login','Dashboard','Logout'];
// const removed = tasks.pop();
// console.log(removed);
// console.log(tasks);


//Q3) Create a queue `['Student B', 'Student C']`. Add `Student A` to the beginning, then remove the first student as if they have been served.

// let queue = ['Student B', 'Student C'];
// queue.unshift('Student A');
// console.log(queue);
// queue.shift();
// console.log(queue);



//Q4) From `const topics = ['HTML', 'CSS', 'JS', 'React', 'Node'];`, create a new array containing only `CSS`, `JS`, and `React` without changing `topics`.

// const topics = ['HTML','CSS','JS','React','Node'];
// const newtopic =topics.slice(1,4);
// console.log(newtopic);


//Q5) Given `const technologies = ['HTML', 'CSS', 'jQuery', 'React'];`, remove `jQuery` from its current position.

// const technologies = ['HTML','CSS','jQuery','React'];
// technologies.splice(2,1);                 //remove index 2 and remove 1 one item
// console.log(technologies);


//Q6) Given a list of registered emails, check whether `student@gmail.com` is already registered and return a boolean.

// const emails = ['student@gmail.com','teacher@gmail.com','abc@gmail.com'];
// console.log(emails.includes('student@gmail.com'));


//Q7) Given `['Karachi', 'Lahore', 'Islamabad', 'Karachi']`, find the index of the first `Karachi`. What should your program do if a searched city is not present? 

// const cities=['Karachi','Lahore','Islamabad','Karachi'];
// const index = cities.indexOf('Karachi');

// if (index === -1) {
//   console.log('City not found');
// } else {
//   console.log(`City found at index ${index}`);
// }


//Q8) Explain, with a small example, the difference between `slice()` and `splice()`. Include which one changes the original array.
//example of slice()
// const arr=[1,2,3,4,5,6];
// const newarr=arr.slice(2,5);
// console.log(newarr);
// console.log(arr);               //doesn't change the array

//example of splice()
// const array = [1,2,3,4,5,6];
// const newarray = array.splice(1,3,2);
// console.log(newarray);
// console.log(array);             //changes the array




//Q9) Given product prices `[1000, 2500, 800, 1500]`, create a new array where every price includes 10% tax.
// const arr = [1000, 2500, 800, 1500];
// const newarr = arr.map((item)=>{
//     return item*0.10;
// });
// console.log(newarr);



//Q10) Given an array of student objects with `firstName` and `lastName`, create a new array containing only each student’s full name.

// const students = [
//     { firstname: "ali", lastname: "khan" },
//     { firstname: "usman", lastname: "shah" }
// ];

// const fullNames = students.map((student) => {
//     return `${student.firstname} ${student.lastname}`;
// });

// console.log(fullNames); 



//Q11) Given marks `[35, 76, 49, 90, 50, 20]`, create a new array containing only passing marks where pass is `>= 50`.
// const marks = [35, 76, 49, 90, 50, 20];
// const pass_marks = marks.filter(passing=> passing>=50);
// console.log(pass_marks);



//Q12) Given a user list with `{name, age}`, produce an array of names for users who are 18 or older.
// const user = [
//     {name:"ali",age:20},
//     {name:"ahmed",age:15},
//     {name:"usman",age:18}
// ];

// const find = user.filter(users=> users.age>=18).map(names=> names.name)
// console.log(find);



//Q13) Given users with unique `id` values, retrieve the user whose `id` is `103`. Handle the case where no user is found.

// const users= [
//     {name:"ali", id:101},
//     {name:"usman", id:102},
//     {name:"ahmed", id:103}
// ];
// const foundUser =users.find(f=> f.id ===103);
// if(foundUser){
//     console.log(`user found ${foundUser.name} with id ${foundUser.id}`);
// }else{
//     console.log(`user not found!`);
    
// }




//Q14) When would you use `find()` instead of `filter()`? Explain the return value difference and give a real application scenario.

// -------use of "find"(to look for single specific item)

// let store = [
//     {id: 101, name: "laptop",Price:1200},
//     {id: 102, name: "Phone", price: 800},
//     {id: 103, name: "Headphones", price: 150}
// ];
// const product = store.find(f=> f.id === 102);
// console.log("use of find:");

// console.log(product);


// -------use of filter (to look for list of items)

// let ages = [20,25,30,40,10,15];
// const greater = ages.filter(a=> a<20);
// console.log("use of filter");

// console.log(greater);



//Q15) Given cart prices `[1200, 350, 999, 450]`, calculate the total bill.

// let cart = [1200, 350, 999, 450];
// let total = cart.reduce((acc,curr)=>{
//     return acc+curr;
// });
// console.log(total);




//Q16) Given `['JS', 'React', 'JS', 'Node', 'React', 'JS']`, build an object showing how many times each technology appears.

// const techs = ['JS', 'React', 'JS', 'Node', 'React', 'JS'];

// const techCount = techs.reduce((acc, tech) => {
    
//     acc[tech] = (acc[tech] || 0) + 1;
//     return acc;
// }, {}); 

// console.log(techCount); 



//Q17) Sort `[25, 3, 100, 12, 8]` in ascending numeric order. Then explain why plain `.sort()` can produce surprising results with numbers.

// const nums= [25, 3, 100, 12, 8];
// nums.sort((a,b)=> a-b);
// console.log(nums);




//Q18) You receive an array from React state and need a sorted version without changing the original state array. Describe the safe strategy and why direct `sort()` can be risky.
// const prices = [1200, 350, 999, 450];

// const sortedPrices = [...prices].sort((a, b) => a - b);

// console.log(sortedPrices); 



//Q19) Given stock quantities `[5, 0, 7, 2]`, check whether at least one product is out of stock.

// let quantities = [5,0,7,2];
// const stock = quantities.some(n=> n===0);
// console.log(stock);




//Q20) Given students’ marks, determine (a) whether every student passed and (b) whether at least one student scored 90 or above. Then explain the difference between `every()` and `some()`.

const marks = [90, 70, 60, 50, 30];

const allPassed = marks.every(s => s > 40);

const hasTopScorer = marks.some(s => s >= 90);

console.log("Every student passed:", allPassed);       
console.log("At least one scored 90+:", hasTopScorer); 















 

