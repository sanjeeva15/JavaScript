// Q1: What is the difference between var, let, and const?

// var   -> can be re-declared and re-assigned
// let   -> cannot be re-declared, but can be re-assigned
// const -> cannot be re-declared or re-assigned


// Q2: Can you re-declare a variable with var? What about let and const?

var q2 = 10;
var q2 = 20;

console.log(q2);

// OUTPUT:
// 20


// Q3: What is the output of this code?

var x3 = 5;
let y3 = 10;
const z3 = 15;

x3 = 20;
y3 = 25;

console.log(x3, y3, z3);

// OUTPUT:
// 20 25 15


// Q4: What is the difference between declaring and initializing a variable?

let age4;        // Declaration
age4 = 21;       // Initialization

console.log(age4);

// OUTPUT:
// 21

// Q5: What will be the output?

let a5;
console.log(a5);

// OUTPUT:
// undefined


// Q6: What is hoisting? Give an example.

console.log(x6);

var x6 = 10;

// OUTPUT:
// undefined


// Q7: What is the difference between null and undefined?

let a7;
let b7 = null;

console.log(a7);
console.log(b7);

// OUTPUT:
// undefined
// null

// Q8: What will be the output?

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});

// OUTPUT:
// object
// undefined
// object
// object


// Q9: What is the difference between == and ===?

console.log(5 == "5");
console.log(5 === "5");

// OUTPUT:
// true
// false


// Q10: What is the difference between ++i and i++?

let i10 = 5;
let x10 = i10++;

console.log(x10);
console.log(i10);

// OUTPUT:
// 5
// 6

let j10 = 5;
let y10 = ++j10;

console.log(y10);
console.log(j10);

// OUTPUT:
// 6
// 6


// Q11: What will be the output?

let x11 = 10;
let y11 = "5";

console.log(x11 + y11);
console.log(x11 - y11);
console.log(x11 * y11);
console.log(x11 / y11);

// OUTPUT:
// 105
// 5
// 50
// 2


// Q12: What are logical operators? Explain with examples.

console.log(10 > 5 && 20 > 10);
console.log(10 > 20 || 20 > 10);
console.log(!(10 > 5));

// OUTPUT:
// true
// true
// false


// Q13: What will be the output?

console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));

// OUTPUT:
// true
// true
// false


// Q14: What is the ternary operator? Give an example.

let age14 = 20;

let result14 = age14 >= 18 ? "Adult" : "Minor";

console.log(result14);

// OUTPUT:
// Adult

// condition ? valueIfTrue : valueIfFalse


// ========================================
// 📌 TYPE CASTING (Q15-Q17)
// ========================================


// Q15: What is the difference between implicit and explicit type casting?

// Implicit conversion -> JavaScript automatically converts the type.
// Explicit conversion -> Programmer manually converts the type.


// Q16: What will be the output?

console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));

// OUTPUT:
// 123
// NaN
// 1
// 0
// false
// true


// Q17: What is NaN? Give an example.

let value17 = Number("hello");

console.log(value17);

// OUTPUT:
// NaN

// Q18: What is the difference between if-else and switch?

// if-else -> useful for conditions and ranges
// switch  -> useful for comparing one value with multiple fixed values


// Q19: What will be the output?

let age19 = 20;

if (age19 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// OUTPUT:
// Adult


// Q20: What is nested if? Give an example.

let age20 = 20;
let hasLicense20 = true;

if (age20 >= 18) {

    if (hasLicense20) {
        console.log("Can drive");
    }

}

// OUTPUT:
// Can drive

// Q21: Write a program to check if a number is even or odd using ternary operator.

let num21 = 7;

let result21 = num21 % 2 === 0 ? "Even" : "Odd";

console.log(result21);

// OUTPUT:
// Odd

// Q22: What is the difference between while and do-while?

// while -> condition is checked before execution
// do-while -> code executes first, then condition is checked


// Q23: What will be the output?

for (let i23 = 1; i23 <= 5; i23++) {
    console.log(i23);
}

// OUTPUT:
// 1
// 2
// 3
// 4
// 5


// Q24: What is the difference between for-of and for-in?

let fruits24 = ["Apple", "Banana", "Mango"];

for (let fruit of fruits24) {
    console.log(fruit);
}

// OUTPUT:
// Apple
// Banana
// Mango

for (let index in fruits24) {
    console.log(index);
}

// OUTPUT:
// 0
// 1
// 2

// Q25: Write a program to find sum of numbers from 1 to 100.

let sum25 = 0;

for (let i25 = 1; i25 <= 100; i25++) {
    sum25 = sum25 + i25;
}

console.log(sum25);

// OUTPUT:
// 5050

// Q26: What is the difference between slice and splice?

let arr26 = [10, 20, 30, 40];

let sliced26 = arr26.slice(1, 3);

console.log(sliced26);
console.log(arr26);

// OUTPUT:
// [20, 30]
// [10, 20, 30, 40]

let arr26b = [10, 20, 30, 40];

arr26b.splice(1, 2);

console.log(arr26b);

// OUTPUT:
// [10, 40]


// Q27: What will be the output?

let arr27 = [1, 2, 3];

arr27.push(4);
arr27.pop();
arr27.unshift(0);
arr27.shift();

console.log(arr27);

// OUTPUT:
// [1, 2, 3]

// Q28: What is the difference between function declaration and function expression?

// Function Declaration

function add28(a, b) {
    return a + b;
}

console.log(add28(10, 20));

// OUTPUT:
// 30


// Function Expression

let subtract28 = function(a, b) {
    return a - b;
};

console.log(subtract28(20, 10));

// OUTPUT:
// 10

// Q29: What is an arrow function? Give an example.

const add29 = (a, b) => a + b;
console.log(add29(10, 20));

// OUTPUT:
// 30

// Q30: What will be the output?

function greet() {
    return "Hello";
}

let message = greet();

console.log(message);

// OUTPUT:
// Hello
