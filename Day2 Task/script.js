// TASK 1 — var, let, const

var studentName1 = "Bob";
let studentAge1 = 21;
const collegeName1 = "ABC College";

console.log(studentName1);
console.log(studentAge1);
console.log(collegeName1);

studentName1 = "Alice";
console.log(studentName1);

studentAge1 = 23;
console.log(studentAge1);

var studentName1 = "Arun";
console.log(studentName1);

// TASK 2 — User Information

let userName2 = prompt("Enter your name:");
let userAge2 = prompt("Enter your age:");
let userCity2 = prompt("Enter your city:");

console.log("Name:", userName2);
console.log("Age:", userAge2);
console.log("City:", userCity2);

// TASK 3 — Welcome Message

let userName3 = prompt("Enter your name:");
alert("Welcome " + userName3 + "!");

// TASK 4 — Age Calculator

let birthYear4 = prompt("Enter your birth year:");
let calculatedAge4 = 2026 - birthYear4;
console.log("Birth Year:", birthYear4);
console.log("Age:", calculatedAge4);

// TASK 5 — Identify Data Types

let text5 = "Hello";
let number5 = 100;
let decimal5 = 25.5;
let valueTrue5 = true;
let valueFalse5 = false;
let nothing5;
let empty5 = null;

console.log(typeof text5);
console.log(typeof number5);
console.log(typeof decimal5);
console.log(typeof valueTrue5);
console.log(typeof valueFalse5);
console.log(typeof nothing5);
console.log(typeof empty5);

// TASK 6 — Student Data

let student6 = {
  name: "Naveen",
  age: 22,
  city: "Trichy",
  qualification: "B.Tech",
  isStudent: true,
};

console.log(student6);
console.log(student6.name);
console.log(student6.age);
console.log(student6.qualification);
console.log(student6.isStudent);

// TASK 7 — Fruit Array

let fruits7 = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Papaya"];

console.log("First fruit:", fruits7[0]);
console.log("Second fruit:", fruits7[1]);
console.log("Last fruit:", fruits7[fruits7.length - 1]);
console.log("Total fruits:", fruits7.length);

// TASK 8 — Basic Calculator

let numberA8 = 20;
let numberB8 = 5;

console.log("Addition:", numberA8 + numberB8);
console.log("Subtraction:", numberA8 - numberB8);
console.log("Multiplication:", numberA8 * numberB8);
console.log("Division:", numberA8 / numberB8);
console.log("Modulus:", numberA8 % numberB8);
console.log("Exponentiation:", numberA8 ** numberB8);

// TASK 9 — Shopping Bill

let shirtPrice9 = 999;
let pantPrice9 = 1499;
let shoesPrice9 = 1999;
let totalPrice9 = shirtPrice9 + pantPrice9 + shoesPrice9;

console.log("Shirt:", shirtPrice9);
console.log("Pant:", pantPrice9);
console.log("Shoes:", shoesPrice9);
console.log("Total:", totalPrice9);

// TASK 10 — Simple Marks

let tamilMarks10 = 80;
let englishMarks10 = 75;
let mathsMarks10 = 90;
let totalMarks10 = tamilMarks10 + englishMarks10 + mathsMarks10;
let averageMarks10 = totalMarks10 / 3;

console.log("Total Marks:", totalMarks10);
console.log("Average Marks:", averageMarks10);

// TASK 11 — Post Increment

let numberA11 = 10;
let numberB11 = numberA11++;

console.log(numberA11);
console.log(numberB11);

// TASK 12 — Pre Increment

let numberA12 = 10;
let numberB12 = ++numberA12;

console.log(numberA12);
console.log(numberB12);

// TASK 13 — Post Decrement

let numberA13 = 20;
let numberB13 = numberA13--;
console.log(numberA13);
console.log(numberB13);

// TASK 14 — Pre Decrement

let numberA14 = 20;
let numberB14 = --numberA14;

console.log(numberA14);
console.log(numberB14);

// TASK 15 — Find Final Values

let numberA15 = 5;
let numberB15 = numberA15++;
let numberC15 = ++numberA15;
let numberD15 = numberB15--;

console.log(numberA15);
console.log(numberB15);
console.log(numberC15);
console.log(numberD15);

// TASK 16 — Assignment Operators

let num16a = 10;
num16a += 5;
console.log("+= :", num16a);

let num16b = 10;
num16b -= 5;
console.log("-= :", num16b);

let num16c = 10;
num16c *= 5;
console.log("*= :", num16c);

let num16d = 10;
num16d /= 5;
console.log("/= :", num16d);

let num16e = 10;
num16e %= 3;
console.log("%= :", num16e);

let num16f = 10;
num16f **= 2;
console.log("**= :", num16f);

// TASK 17 — Mini Student Profile

let profileName17 = "Naveen";
let profileAge17 = 22;
let profileCity17 = "Trichy";
let profileCollege17 = "ABC College";

let subjects17 = ["Tamil", "English", "Maths", "Science", "Computer"];

let student17 = {
  name: profileName17,
  age: profileAge17,
  city: profileCity17,
  subjects: subjects17,
  isStudent: true,
};

console.log("Student Name:", student17.name);
console.log("Student Age:", student17.age);
console.log("City:", student17.city);
console.log("First Subject:", student17.subjects[0]);
console.log("Last Subject:", student17.subjects[student17.subjects.length - 1]);
console.log("Total Subjects:", student17.subjects.length);
console.log("Complete Object:", student17);

let firstNumber18 = prompt("Enter first number:");
let secondNumber18 = prompt("Enter second number:");

console.log("Addition:", firstNumber18 + secondNumber18);
console.log("Subtraction:", firstNumber18 - secondNumber18);
console.log("Multiplication:", firstNumber18 * secondNumber18);
console.log("Division:", firstNumber18 / secondNumber18);
console.log("Modulus:", firstNumber18 % secondNumber18);
console.log("Power:", firstNumber18 ** secondNumber18);
