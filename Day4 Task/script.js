//  TASK 1 - For Loop

console.log("TASK 1");

for (let i = 3; i <= 12; i++) {
    console.log(i);
}


//  TASK 2 - Reverse Number

console.log("TASK 2");

for (let i = 18; i >= 9; i--) {
    console.log(i);
}


//  TASK 3 - Even Numbers

console.log("TASK 3");

for (let i = 4; i <= 24; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


//  TASK 4 - Odd Numbers

console.log("TASK 4");

for (let i = 5; i <= 23; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


//  TASK 5 - Multiplication Table

console.log("TASK 5");

let tableNumber = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(
        tableNumber + " x " + i + " = " + (tableNumber * i)
    );
}


//  TASK 6 - While Loop Countdown

console.log("TASK 6");

let countdown = 15;

while (countdown >= 6) {
    console.log(countdown);
    countdown--;
}


//  TASK 7 - Sum of Numbers

console.log("TASK 7");

let counter = 4;
let total = 0;

while (counter <= 13) {
    total = total + counter;
    counter++;
}

console.log(total);


//  TASK 8 - Do While

console.log("TASK 8");

let doNumber = 6;

do {
    console.log(doNumber);
    doNumber++;
} while (doNumber <= 10);


//  TASK 9 - Do While Understanding

console.log("TASK 9");

let firstNumber = 25;

do {
    console.log(firstNumber);
    firstNumber++;
} while (firstNumber <= 10);

//  TASK 10 - String Characters

console.log("TASK 10");

let programmingLanguage = "typescript";

for (let character of programmingLanguage) {
    console.log(character);
}


//  TASK 11 - Array Values

console.log("TASK 11");

let vegetables = [
    "carrot",
    "potato",
    "tomato",
    "onion",
    "cabbage"
];

for (let vegetable of vegetables) {
    console.log(vegetable);
}


//  TASK 12 - Student Names

console.log("TASK 12");

let studentList = [
    "Vikram",
    "Meena",
    "Rahul",
    "Kavya",
    "Surya"
];

for (let studentName of studentList) {
    console.log("Student: " + studentName);
}


//  TASK 13 - Employee Object

console.log("TASK 13");

let worker = {
    name: "Vimal",
    age: 29,
    role: "Accountant",
    city: "Coimbatore"
};

for (let property in worker) {
    console.log(property, worker[property]);
}


//  TASK 14 - Product Object

console.log("TASK 14");

let item = {
    productName: "Wireless Mouse",
    price: 1299,
    brand: "Logitech",
    category: "Computer Accessories",
    stock: 37
};

for (let property in item) {
    console.log(property, item[property]);
}


//  TASK 15 - Simple Function

console.log("TASK 15");

function sayWelcome() {
    console.log("Welcome to Web Development");
}

sayWelcome();
sayWelcome();
sayWelcome();


//  TASK 16 - Function With Parameter

console.log("TASK 16");

function sayHello(personName) {
    console.log("Hello " + personName);
}

sayHello("Karthik");
sayHello("Anitha");
sayHello("Ramesh");


//  TASK 17 - Multiple Parameters

console.log("TASK 17");

function showStudent(studentName, studentAge, course) {
    console.log("Name:", studentName);
    console.log("Age:", studentAge);
    console.log("Course:", course);
}

showStudent("Deepak", 19, "BCA");
showStudent("Harini", 20, "BBA");
showStudent("Manoj", 21, "B.Sc Computer Science");


//  TASK 18 - Addition Function

console.log("TASK 18");

function calculateSum(firstValue, secondValue) {
    return firstValue + secondValue;
}

let additionResult = calculateSum(35, 47);

console.log(additionResult);


//  TASK 19 - Salary

console.log("TASK 19");

function getSalary(amount) {
    return amount;
}

let monthlyPay = getSalary(62000);

console.log(monthlyPay);


//  TASK 20 - Bonus Calculator

console.log("TASK 20");

function calculateBonus(baseSalary, extraAmount) {
    return baseSalary + extraAmount;
}

let finalPay = calculateBonus(58000, 7500);

console.log(finalPay);


//  TASK 21 - Default Parameter

console.log("TASK 21");

function showEmployee(employeeName, employeeRole = "Tester") {
    console.log("Name:", employeeName);
    console.log("Role:", employeeRole);
}

showEmployee("Mohan");
showEmployee("Lakshmi", "UI Designer");


//  TASK 22 - Named Function

console.log("TASK 22");

function findSquare(value) {
    return value * value;
}

console.log(findSquare(7));
console.log(findSquare(11));
console.log(findSquare(14));
console.log(findSquare(16));
console.log(findSquare(19));


//  TASK 23 - Anonymous Function

console.log("TASK 23");

let calculateDifference = function(valueOne, valueTwo) {
    return valueOne - valueTwo;
};

console.log(calculateDifference(95, 38));


//  TASK 24 - Arrow Function

console.log("TASK 24");

let calculateMultiplication = (numberOne, numberTwo) => {
    return numberOne * numberTwo;
};

console.log(calculateMultiplication(12, 8));


// TASK 25 - Scope

console.log("TASK 25");

function checkScope() {

    if (true) {

        var outerValue = 45;
        let blockValue = 55;
        const fixedValue = 65;

        console.log(outerValue);
        console.log(blockValue);
        console.log(fixedValue);
    }

    console.log(outerValue);

}

checkScope();


//  TASK 26 - Hoisting with var

console.log("TASK 26");

console.log(variableA);

var variableA = 75;


//  TASK 27 - Hoisting with let

console.log("TASK 27");

// console.log(variableB);
// let variableB = 85;


//  TASK 28 - Hoisting with const

console.log("TASK 28");

// console.log(variableC);
// const variableC = 95;

//  TASK 29 - IIFE

console.log("TASK 29");

(function() {
    console.log("JavaScript Started Successfully");
})();


(function(productName, discountPercent) {
    console.log(
        productName +
        " is available with " +
        discountPercent +
        "% discount"
    );
})("Smart Watch", 15);


//  TASK 30 - Callback / Higher-Order Function

console.log("TASK 30");

function displayMessage() {
    console.log("Task Completed Successfully");
}

function runFunction(callbackFunction) {
    callbackFunction();
}

runFunction(displayMessage);

//  TASK 31 - Generator Function
console.log("TASK 31");

function* rewardGenerator() {
    yield "5% Cashback";
    yield "15% Cashback";
    yield "25% Cashback";
    yield "Try Again Tomorrow";
}

let rewards = rewardGenerator();

for (let reward of rewards) {
    console.log(reward);
}

// TASK 32  EMPLOYEE MANAGEMENT SYSTEM

console.log("TASK 32");


let staffMembers = [

    {
        name: "Rohit",
        age: 27,
        department: "Finance",
        role: "Financial Analyst",
        salary: 42000
    },

    {
        name: "Swetha",
        age: 31,
        department: "Marketing",
        role: "Marketing Manager",
        salary: 68000
    },

    {
        name: "Ajay",
        age: 23,
        department: "Support",
        role: "Support Executive",
        salary: 32000
    },

    {
        name: "Divya",
        age: 28,
        department: "Engineering",
        role: "Software Engineer",
        salary: 55000
    },

    {
        name: "Ganesh",
        age: 35,
        department: "Sales",
        role: "Sales Manager",
        salary: 72000
    }
];

// 1. for...of
// Print every employee

console.log("EMPLOYEE INFORMATION");

for (let staff of staffMembers) {

    console.log("Name:", staff.name);
    console.log("Age:", staff.age);
    console.log("Department:", staff.department);
    console.log("Role:", staff.role);
    console.log("Salary:", staff.salary);

    console.log("-------------------------");
}

// 2. for...in
// Print every key and value

console.log("EMPLOYEE KEYS AND VALUES");

for (let staff of staffMembers) {

    for (let key in staff) {
        console.log(key, staff[key]);
    }

    console.log("-------------------------");
}


// 3 & 4. Function + Parameters

function displayStaff(
    staffName,
    staffAge,
    staffDepartment,
    staffRole,
    staffSalary
) {

    console.log("Name:", staffName);
    console.log("Age:", staffAge);
    console.log("Department:", staffDepartment);
    console.log("Role:", staffRole);
    console.log("Salary:", staffSalary);
}

console.log("DISPLAY USING FUNCTION");

for (let staff of staffMembers) {

    displayStaff(
        staff.name,
        staff.age,
        staff.department,
        staff.role,
        staff.salary
    );

    console.log("-------------------------");
}

// 5. Return
// Function returns employee salary

function returnSalary(staff) {
    return staff.salary;
}

console.log("EMPLOYEE SALARIES");

for (let staff of staffMembers) {

    let currentSalary = returnSalary(staff);

    console.log(
        staff.name + " Salary: " + currentSalary
    );
}

// 6. Condition
// Salary >= 40000

console.log("SALARY CONDITION");

for (let staff of staffMembers) {

    if (staff.salary >= 40000) {

        console.log(
            staff.name + " earns 40000 or more"
        );

    } else {

        console.log(
            staff.name + " earns less than 40000"
        );
    }
}

// 7. Arrow Function
// Calculate yearly salary

let calculateYearlySalary = (monthlySalary) => {
    return monthlySalary * 12;
};

console.log("YEARLY SALARY");

for (let staff of staffMembers) {

    console.log(
        staff.name + ": " +
        calculateYearlySalary(staff.salary)
    );
}

// 8. Generator
// Employee Benefits

function* employeeBenefits() {

    yield "Medical Insurance";
    yield "Transport Allowance";
    yield "Meal Card";
    yield "Performance Bonus";
}

console.log("EMPLOYEE BENEFITS");

let benefits = employeeBenefits();

for (let benefit of benefits) {
    console.log(benefit);
}

console.log("ALL 32 TASKS COMPLETED");