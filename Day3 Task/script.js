// TASK 1 - VARIABLES

var name = "Sanjeeva";
let age = 21;
const city = "Tiruppur"
var college = "ABC College";

console.log("TASK 1");

console.log(name);
console.log(age);
console.log(city);
console.log(college);

// Redeclaring var

var name = "Arun";
console.log("After var redeclaration:");

console.log(name);

// TASK 2 - PRINTING STATEMENTS

console.log("TASK 2");

console.log("Hello JavaScript");
alert("Hello from alert");
confirm("Do you like JavaScript?");
let userName = prompt("Enter your name:");
console.log("Your name is: " + userName);
document.writeln("Hello from document.writeln()");

// TASK 3 - USER DETAILS

console.log("TASK 3");

let studentName = prompt("Enter your name:");
let studentAge = prompt("Enter your age:");
let studentCity = prompt("Enter your city:");
let qualification = prompt("Enter your qualification:");
console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("City:", studentCity);
console.log("Qualification:", qualification);

// TASK 4 - DATA TYPES

console.log("TASK 4");

let language = "JavaScript";
let number = 100;
let decimal = 99.5;
let isStudent = true;
let isWorking = false;
let notDefined;
let emptyValue = null;
console.log(language, typeof language);
console.log(number, typeof number);
console.log(decimal, typeof decimal);
console.log(isStudent, typeof isStudent);
console.log(isWorking, typeof isWorking);
console.log(notDefined, typeof notDefined);
console.log(emptyValue, typeof emptyValue);

// TASK 5 - STUDENT ARRAY

console.log("TASK 5");

let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
console.log("First student:", students[0]);
console.log("Second student:", students[1]);
console.log("Last student:", students[students.length - 1]);
console.log("Total students:", students.length);

// TASK 6 - EMPLOYEE OBJECT

console.log("TASK 6");

let employee = {
    name: "Suresh",
    age: 28,
    role: "Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    isWorking: true,
    qualification: ["BCA", "MCA"]
};
console.log("Employee name:", employee.name);
console.log("Age:", employee.age);
console.log("Role:", employee.role);
console.log("First skill:", employee.skills[0]);
console.log(
    "Last qualification:",
    employee.qualification[employee.qualification.length - 1]
);
console.log("Working status:", employee.isWorking);

// TASK 7 - CALCULATOR

console.log("TASK 7");

let a = 20;
let b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// TASK 8 - SHOPPING BILL

console.log("TASK 8");

let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;
let totalPrice = shirt + pant + shoes + bag;
console.log("Total price:", totalPrice);


// TASK 9 - INCREMENT & DECREMENT

console.log("TASK 9");

// A - Post Increment

let a1 = 10;
let b1 = a1++;
console.log("A:", a1);
console.log("A:", b1);

// B - Pre Increment

let a2 = 10;
let b2 = ++a2;
console.log("B:", a2);
console.log("B:", b2);

// C - Post Decrement

let a3 = 10;
let b3 = a3--;
console.log("C:", a3);
console.log("C:", b3);

// D - Pre Decrement

let a4 = 10;
let b4 = --a4;
console.log("D:", a4);
console.log("D:", b4);

// TASK 10 - ASSIGNMENT OPERATORS

console.log("TASK 10");

let num = 10;
num += 5;
console.log("After += 5:", num);
num -= 3;
console.log("After -= 3:", num);
num *= 2;
console.log("After *= 2:", num);
num /= 4;
console.log("After /= 4:", num);
num %= 3;
console.log("After %= 3:", num);
num **= 2;
console.log("After **= 2:", num);

// TASK 11 - COMPARISON OPERATORS

console.log("TASK 11");

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);
console.log(5 == "5");
console.log(5 === "5");
console.log(10 != "10");
console.log(10 !== "10");


// TASK 12 - AND

console.log("TASK 12");

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// TASK 13 - OR

console.log("TASK 13");

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// TASK 14 - NOT

console.log("TASK 14");

console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));

// TASK 15 - COMBINATION

console.log("TASK 15");

console.log(5 == "5" && !(5 === 5) || 6 > 7);
console.log(10 > 5 && 8 < 12 || 4 === "4");
console.log(7 === 7 && 10 != "10" || 5 >= 5);
console.log(15 < 10 || 20 > 15 && 5 == "5");


// TASK 16 - VOTING  TERNARY

console.log("TASK 16");

let votingAge = 20;
let votingResult =
    votingAge >= 18
        ? "Eligible to vote"
        : "Not eligible";
console.log(votingResult);

// TASK 17 - PASSWORD - TERNARY

console.log("TASK 17");

let password = true;
let loginResult =
    password
        ? "Login successful"
        : "Wrong password";

console.log(loginResult);


// TASK 18 - USER INTRODUCTION

console.log("TASK 18");

let introName = "Sanjeeva";
let introAge = 21;
let introCity = "Tiruppur";

console.log(
    "My name is " +
    introName +
    ". I am " +
    introAge +
    " years old. I live in " +
    introCity +
    "."
);

console.log(
    `My name is ${introName}. I am ${introAge} years old. I live in ${introCity}.`
);

// TASK 19 - STRING CONVERSION

console.log("TASK 19");

console.log(String(100), typeof String(100));
console.log(String(true), typeof String(true));
console.log(String(undefined), typeof String(undefined));
console.log(String(null), typeof String(null));
console.log(String([1, 2]), typeof String([1, 2]));

// TASK 20 - NUMBER CONVERSION

console.log("TASK 20");

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));

// TASK 21 - BOOLEAN CONVERSION

console.log("TASK 21");

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));

// TASK 22 - VOTING ELIGIBILITY

console.log("TASK 22");

let voteAge = Number(prompt("Task 22 - Enter your age:"));

if (voteAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}

// TASK 23 - POSITIVE / NEGATIVE / ZERO

console.log("TASK 23");

let checkNumber = Number(prompt("Task 23 - Enter a number:"));

if (checkNumber > 0) {
    console.log("Positive");
} else if (checkNumber < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// TASK 24 - GRADE SYSTEM

console.log("TASK 24");

let marks = Number(prompt("Task 24 - Enter your marks:"));

if (marks >= 90 && marks <= 100) {
    console.log("A Grade");
} else if (marks >= 80) {
    console.log("B Grade");
} else if (marks >= 70) {
    console.log("C Grade");
} else if (marks >= 60) {
    console.log("D Grade");
} else {
    console.log("Fail");
}

// TASK 25 - JOB ELIGIBILITY

console.log("TASK 25");

let jobAge = Number(prompt("Enter your age:"));
let height = Number(prompt("Enter your height:"));
let weight = Number(prompt("Enter your weight:"));

if (jobAge >= 18) {

    if (height >= 160) {

        if (weight >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("You are not selected: Weight must be 60 or above");
        }

    } else {
        console.log("You are not selected: Height must be 160 cm or above");
    }

} else {
    console.log("You are not selected: Age must be 18 or above");
}

// TASK 26 - TRAFFIC LIGHT

console.log("TASK 26");

let trafficLight = prompt(
    "Enter traffic light color: red, yellow or green"
);

switch (trafficLight.toLowerCase()) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}

// TASK 27 - DAY

console.log("TASK 27");

let day = 1;

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
        break;

    default:
        console.log("Invalid day");
}
// TASK 28 - FINAL MINI PROJECT

console.log("TASK 28 - STUDENT RESULT SYSTEM");

let finalName = prompt("Enter your name:");
let finalAge = Number(prompt("Enter your age:"));
let finalCity = prompt("Enter your city:");
let tamil = Number(prompt("Enter Tamil mark:"));
let english = Number(prompt("Enter English mark:"));
let maths = Number(prompt("Enter Maths mark:"));
let total = tamil + english + maths;
let average = total / 3;
let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}

let voting;

if (finalAge >= 18) {
    voting = "Eligible";
} else {
    voting = "Not Eligible";
}

console.log(`
Name: ${finalName}
Age: ${finalAge}
City: ${finalCity}
Tamil: ${tamil}
English: ${english}
Maths: ${maths}
Total: ${total}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}
`);

document.body.innerHTML += `
    <h2>Student Result</h2>
    <p>Name: ${finalName}</p>
    <p>Age: ${finalAge}</p>
    <p>City: ${finalCity}</p>
    <p>Total: ${total}</p>
    <p>Average: ${average.toFixed(2)}</p>
    <p>Grade: ${grade}</p>
    <p>Voting: ${voting}</p>
`;