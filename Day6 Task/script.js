// TASK 1 - STUDENT RESULT ANALYZER

function studentResult(studentName, department, ...marks) {

    let totalMarks = 0;
    let isPass = true;

    for (let mark of marks) {
        totalMarks += mark;

        if (mark < 50) {
            isPass = false;
        }
    }

    let average = totalMarks / marks.length;
    let grade;

    if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    console.log("\n========== TASK 1: STUDENT RESULT ==========");

    console.log("Name       :", studentName);
    console.log("Department :", department);
    console.log("Marks      :", marks);
    console.log("Total      :", totalMarks);
    console.log("Average    :", average.toFixed(2));
    console.log("Result     :", isPass ? "Pass" : "Fail");
    console.log("Grade      :", grade);
}

studentResult(
    "Vignesh",
    "Computer Science",
    88,
    76,
    92,
    65,
    58
);

// TASK 2 - EMPLOYEE SALARY CALCULATOR

let employeeInfo = {
    name: "Aravind",
    role: "Software Engineer",
    salary: 48000,
    experience: 3
};

function calculateSalary(employee) {

    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = employee.salary * 0.15;
    } else if (employee.experience >= 2) {
        bonus = employee.salary * 0.10;
    }

    let finalSalary = employee.salary + bonus;

    console.log("\n========== TASK 2: SALARY CALCULATOR ==========");

    console.log("Name        :", employee.name);
    console.log("Role        :", employee.role);
    console.log("Basic Salary:", employee.salary);
    console.log("Experience  :", employee.experience, "years");
    console.log("Bonus       :", bonus);
    console.log("Final Salary:", finalSalary);
}

calculateSalary(employeeInfo);

// TASK 3 - PRODUCT FILTER SYSTEM

let itemList = [

    {
        name: "Monitor",
        price: 18000,
        category: "electronics"
    },

    {
        name: "Headphones",
        price: 2200,
        category: "electronics"
    },

    {
        name: "Jacket",
        price: 3200,
        category: "fashion"
    },

    {
        name: "Wallet",
        price: 900,
        category: "fashion"
    },

    {
        name: "Tablet",
        price: 28000,
        category: "electronics"
    }
];

let productsAbove2000 = itemList.filter(product => product.price > 2000);

let electronicItems = itemList.filter(
    product => product.category === "electronics"
);

let firstBelow1000 = itemList.find(
    product => product.price < 1000
);

let totalProductPrice = itemList.reduce(
    (total, product) => total + product.price,
    0
);

let productAbove50000 = itemList.some(
    product => product.price > 50000
);

let allProductsAbove500 = itemList.every(
    product => product.price > 500
);

console.log("\n========== TASK 3: PRODUCT FILTER SYSTEM ==========");

console.log("Products above ₹2,000 :", productsAbove2000);

console.log("Electronics          :", electronicItems);

console.log("First below ₹1,000   :", firstBelow1000);

console.log("Total product price  :", totalProductPrice);

console.log("Any above ₹50,000?   :", productAbove50000);

console.log("Every price > ₹500?  :", allProductsAbove500);

// TASK 4 - EMPLOYEE MANAGEMENT

let staffMembers = [

    {
        id: 201,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 42000
    },

    {
        id: 202,
        name: "Lokesh",
        role: "Backend Developer",
        salary: 55000
    },

    {
        id: 203,
        name: "Mohan",
        role: "UI Designer",
        salary: 38000
    },

    {
        id: 204,
        name: "Suresh",
        role: "Project Manager",
        salary: 68000
    },

    {
        id: 205,
        name: "Nithya",
        role: "QA Engineer",
        salary: 46000
    },

    {
        id: 206,
        name: "Ramesh",
        role: "DevOps Engineer",
        salary: 59000
    }
];

let allEmployeeNames = staffMembers.map(
    employee => employee.name
);

let employeesAbove40000 = staffMembers.filter(
    employee => employee.salary > 40000
);

let employeeWithId203 = staffMembers.find(
    employee => employee.id === 203
);

let totalEmployeeSalary = staffMembers.reduce(
    (total, employee) => total + employee.salary,
    0
);

let highestPaidEmployee = staffMembers.reduce(
    (highest, employee) =>
        employee.salary > highest.salary ? employee : highest
);

let salaryHighToLow = [...staffMembers].sort(
    (a, b) => b.salary - a.salary
);

let employeeNamesOnly = staffMembers.map(
    employee => employee.name
);

console.log("\n========== TASK 4: EMPLOYEE MANAGEMENT ==========");

console.log("All employee names       :", allEmployeeNames);

console.log("Employees above ₹40,000  :", employeesAbove40000);

console.log("Employee with ID 203     :", employeeWithId203);

console.log("Total salary             :", totalEmployeeSalary);

console.log("Highest paid employee    :", highestPaidEmployee);

console.log("Salary High → Low        :", salaryHighToLow);

console.log("Names only               :", employeeNamesOnly);

// TASK 5  SHOPPING CART

let shoppingCart = [

    {
        name: "Laptop",
        price: 52000,
        quantity: 1
    },

    {
        name: "Mouse",
        price: 1200,
        quantity: 2
    },

    {
        name: "Keyboard",
        price: 2500,
        quantity: 1
    }
];

function calculateCart(cart) {

    let totalCartValue = cart.reduce(
        (total, item) =>
            total + (item.price * item.quantity),
        0
    );

    let discount = 0;

    if (totalCartValue > 50000) {
        discount = totalCartValue * 0.10;
    }

    let finalAmount = totalCartValue - discount;

    console.log("\n========== TASK 5: SHOPPING CART ==========");

    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;

        console.log(
            item.name,
            "=>",
            item.price,
            "x",
            item.quantity,
            "=",
            itemTotal
        );
    });

    console.log("Total Cart Value :", totalCartValue);
    console.log("Discount         :", discount);
    console.log("Final Amount     :", finalAmount);
}

calculateCart(shoppingCart);

// TASK 6 - STUDENT SEARCH SYSTEM

let classStudents = [

    {
        name: "Adithya",
        age: 21,
        mark: 86
    },

    {
        name: "Meenakshi",
        age: 22,
        mark: 94
    },

    {
        name: "Harish",
        age: 20,
        mark: 72
    },

    {
        name: "Deepak",
        age: 23,
        mark: 48
    }
];

let studentNames = classStudents.map(
    student => student.name
);

let studentsAbove80 = classStudents.filter(
    student => student.mark > 80
);

let selectedStudent = classStudents.find(
    student => student.name === "Meenakshi"
);

let averageStudentMark =
    classStudents.reduce(
        (total, student) => total + student.mark,
        0
    ) / classStudents.length;

let anyoneFailed = classStudents.some(
    student => student.mark < 50
);

let everyoneAbove40 = classStudents.every(
    student => student.mark > 40
);

let studentsSortedByMarks = [...classStudents].sort(
    (a, b) => b.mark - a.mark
);

console.log("\n========== TASK 6: STUDENT SEARCH SYSTEM ==========");

console.log("All student names       :", studentNames);

console.log("Students above 80       :", studentsAbove80);

console.log("Student Meenakshi       :", selectedStudent);

console.log(
    "Average mark            :",
    averageStudentMark.toFixed(2)
);

console.log("Anyone failed?          :", anyoneFailed);

console.log("Everyone above 40?      :", everyoneAbove40);

console.log("Students by marks       :", studentsSortedByMarks);


// TASK 7 - ARRAY TRANSFORMATION CHALLENGE

let numberCollection = [
    14,
    6,
    9,
    23,
    48,
    11,
    32,
    17
];

let numbersDoubled = numberCollection.map(
    number => number * 2
);

let evenNumbers = numberCollection.filter(
    number => number % 2 === 0
);

let numbersAbove15 = numberCollection.filter(
    number => number > 15
);

let firstAbove20 = numberCollection.find(
    number => number > 20
);

let totalNumbers = numberCollection.reduce(
    (total, number) => total + number,
    0
);

let anyAbove40 = numberCollection.some(
    number => number > 40
);

let allPositive = numberCollection.every(
    number => number > 0
);

let numbersHighToLow = [...numberCollection].sort(
    (a, b) => b - a
);

console.log("\n========== TASK 7: ARRAY TRANSFORMATION ==========");

console.log("Numbers × 2            :", numbersDoubled);

console.log("Even numbers            :", evenNumbers);

console.log("Numbers above 15       :", numbersAbove15);

console.log("First number above 20  :", firstAbove20);

console.log("Total                   :", totalNumbers);

console.log("Any number above 40?   :", anyAbove40);

console.log("Every number positive? :", allPositive);

console.log("Highest → Lowest       :", numbersHighToLow);


// TASK 8 - STRING ANALYZER

let userSentence = prompt(
    "Enter a sentence:"
);

if (userSentence !== null && userSentence.trim() !== "") {

    let trimmedSentence = userSentence.trim();

    let wordArray = trimmedSentence.split(/\s+/);

    console.log("\n========== TASK 8: STRING ANALYZER ==========");

    console.log(
        "Sentence           :",
        trimmedSentence
    );

    console.log(
        "Total characters   :",
        trimmedSentence.length
    );

    console.log(
        "Uppercase          :",
        trimmedSentence.toUpperCase()
    );

    console.log(
        "Lowercase          :",
        trimmedSentence.toLowerCase()
    );

    console.log(
        'Contains JavaScript:',
        trimmedSentence.includes("JavaScript")
    );

    console.log(
        "First character    :",
        trimmedSentence.slice(0, 1)
    );

    console.log(
        "Last character     :",
        trimmedSentence.slice(-1)
    );

    console.log(
        "Number of words    :",
        wordArray.length
    );

    console.log(
        "JavaScript → Python:",
        trimmedSentence.replace(
            "JavaScript",
            "Python"
        )
    );

    console.log(
        "Array              :",
        wordArray
    );

} else {

    console.log("\nNo sentence entered.");
}

// FINAL MINI PROJECT — EMPLOYEE DASHBOARD

let companyEmployees = [

    {
        id: 301,
        name: "Varun",
        department: "IT",
        salary: 47000,
        experience: 2
    },

    {
        id: 302,
        name: "Divya",
        department: "HR",
        salary: 51000,
        experience: 4
    },

    {
        id: 303,
        name: "Rohit",
        department: "IT",
        salary: 67000,
        experience: 7
    }
];


// 1. Employee List

console.log(
    "\n========== FINAL PROJECT: EMPLOYEE DASHBOARD =========="
);

console.log("\n1. EMPLOYEE LIST");

console.log(companyEmployees);


// 2. Search Employee By Name

let searchName = "Divya";

let searchedEmployee = companyEmployees.find(
    employee =>
        employee.name.toLowerCase() ===
        searchName.toLowerCase()
);

console.log("\n2. SEARCH EMPLOYEE");

console.log("Search :", searchName);
console.log("Result :", searchedEmployee);


// 3. Department Filter

let selectedDepartment = "IT";

let departmentEmployees = companyEmployees.filter(
    employee =>
        employee.department.toLowerCase() ===
        selectedDepartment.toLowerCase()
);

console.log("\n3. DEPARTMENT FILTER");

console.log(
    selectedDepartment,
    ":",
    departmentEmployees
);


// 4. Salary Filter

let highSalaryEmployees = companyEmployees.filter(
    employee => employee.salary > 50000
);

console.log("\n4. SALARY FILTER");

console.log(
    "Employees earning above ₹50,000:",
    highSalaryEmployees
);


// 5. Total Company Salary

let totalCompanySalary = companyEmployees.reduce(
    (total, employee) =>
        total + employee.salary,
    0
);

console.log("\n5. TOTAL COMPANY SALARY");

console.log(
    "Total Salary: ₹" + totalCompanySalary
);


// 6. Highest Salary

let highestSalaryEmployee = companyEmployees.reduce(
    (highest, employee) =>
        employee.salary > highest.salary
            ? employee
            : highest
);

console.log("\n6. HIGHEST SALARY");

console.log(
    "Highest Paid Employee:",
    highestSalaryEmployee
);


// 7. Experience Filter

let experiencedEmployees = companyEmployees.filter(
    employee => employee.experience > 3
);

console.log("\n7. EXPERIENCE FILTER");

console.log(
    "Employees with more than 3 years:",
    experiencedEmployees
);


// 8. Sorting

let salaryLowToHigh = [...companyEmployees].sort(
    (a, b) => a.salary - b.salary
);

let salaryHighToLowDashboard = [...companyEmployees].sort(
    (a, b) => b.salary - a.salary
);

console.log("\n8. SORTING");

console.log("Low → High:", salaryLowToHigh);
console.log("High → Low:", salaryHighToLowDashboard);


// 9. STATISTICS

let totalEmployees = companyEmployees.length;

let averageCompanySalary =
    totalCompanySalary / totalEmployees;

console.log("\n9. STATISTICS");

console.log(
    "Total Employees :",
    totalEmployees
);

console.log(
    "Total Salary    : ₹" + totalCompanySalary
);

console.log(
    "Highest Salary  : ₹" + highestSalaryEmployee.salary
);

console.log(
    "Average Salary  : ₹" + averageCompanySalary.toFixed(2)
);