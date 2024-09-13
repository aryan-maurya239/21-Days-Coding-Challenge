// Function to check if someone is an adult based on age
function isAdult(a) {
    if (a >= 18) {
        console.log("Adult");  // Prints "Adult" if age is 18 or more
    } else {
        console.log("Not adult");  // Prints "Not adult" if age is less than 18
    }
}

isAdult(20);  // Adult
isAdult(2);   // Not adult
isAdult(34);  // Adult

// Function to simulate rolling a dice
function rollDice() {
    let rnad = Math.floor(Math.random() * 6) + 1;  // Generates a random number between 1 and 6
    console.log(rnad);  // Prints the random dice number
}

for (let i = 1; i <= 10; i++) {
    rollDice();  // Rolls the dice 10 times, output will be random
}

// Function to calculate the average of 3 numbers
function avg(a, b, c) {
    let avgnum = (a + b + c) / 3;  // Calculates the average of 3 numbers
    return avgnum;  // Returns the average
}

console.log(avg(5, 7, 9));  // 7, because (5 + 7 + 9) / 3 = 21 / 3 = 7

// Function to print the multiplication table of a number
console.log("Table");
function PrintTable(num) {
   for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${num} = ${i * num}`);  // Prints the multiplication table for the given number
   }
}

PrintTable(44);  
// Output:
// 1 * 44 = 44
// 2 * 44 = 88
// 3 * 44 = 132
// 4 * 44 = 176
// 5 * 44 = 220
// 6 * 44 = 264
// 7 * 44 = 308
// 8 * 44 = 352
// 9 * 44 = 396
// 10 * 44 = 440

// Function that returns the sum of numbers from 1 to n
function sum(num) {
    let totsum = 0;
    for (let a = 1; a <= num; a++) {
        totsum = totsum + a;  // Adds all numbers from 1 to num
    }
    return totsum;  // Returns the total sum
}

console.log(sum(1000));  // 500500, the sum of numbers from 1 to 1000

// Function that concatenates all strings in an array
function Concat(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i];  // Concatenates each string element in the array
    }
    return result;  // Returns the concatenated result
}

let strArray = ["A", "R", "Y", "A", "N"];
console.log(Concat(strArray));  // "ARYAN", concatenates all strings

// Function expression for addition of two numbers
let add = function(a, b) {
    return a + b;  // Adds two numbers and returns the result
};

console.log(add(4, 5));  // 9

// Function to call another function multiple times
function multipleGreet(func, n) {
    for (let i = 1; i <= n; i++) {
        func();  // Calls the passed function 'n' times
    }
}

let greet = function() {
    console.log('Hello!');  // Prints "Hello!" when called
};

multipleGreet(greet, 10);  // Calls greet function 10 times
// Output:
// Hello!
// Hello!
// Hello!
// Hello!
// Hello!
// Hello!
// Hello!
// Hello!
// Hello!
// Hello!
