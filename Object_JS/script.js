/*

Object is an unordered collection of key-value pairs where each key-value pair is called a property.

The key can be a string and a value can be any valid Javascript value like number,string,an array or even a function.

When we declare a function as a property of an object, we can call this as a method.

*/

/*
let object1 = {};

console.log(object1);
*/


/* When an object has multiple properties, we can use comma to separate the line. */

/*
let person = {
    
    firstName: 'John',
    lastName: 'Kumar'

};

console.log(person);
*/

//We can access property of an object using dot notation. [objectName.propertyName]

//console.log(person.firstName);
//console.log(person.lastName);

//We can access using array notation
// objectName["propertName"]


//console.log(person["firstName"]);
//console.log(person["lastName"]);


//Object Example 3:

/*
let person = {
    name: "Sam",
    age: "35",
    "Full Address": "Mumbai,Andheri West",
    job: "Designer",
    dob: 1985,
    1985: "DOB"
};

console.log(person);

console.log(person.name);

console.log(person["Full Address"]);

console.log(person[1985]);

console.log(person["dob"]);
*/

//Modifying the value of a property

/*
let person = {
    
    firstName: "Rajesh",
    lastName: "Kumar"
};

console.log(person);

person.firstName = "Suresh";

console.log(person.firstName);
*/

/*
let palette = {
    
    red: "#eb44bc",
    yellow: "#f9cde2",
};


palette.yellow = "yellow";

//Updating one more new property

palette.blue = "blue";

let orange = "#456aae";

palette.orange = orange;

console.log(palette);

let black = "#000000";

console.log(palette["black"]);
*/

/*
let userReviews = {};

userReviews['MissionImpossible'] = 8.8;

userReviews["Inception"] = 9.2;

console.log(userReviews);
*/

/*
let person = {
    
    firstName: 'John',
    lastName: 'Knight',
    age: 2022 - 1990,
    job: "Designer",
    friends: ["Rakesh", "Sam", "Ravi"]
    
};

//console.log(person);
console.log(`First Name:${person.firstName}\nLast Name:${person.lastName}\nAge:${person.age}\nJob:${person.job}\nFriend1:${person.friends[0]}\nFriend2:${person.friends[1]}\nFriend3:${person.friends[2]}`);


let nameKey = 'Name';

console.log(person['first' + nameKey]);
console.log(person['last' + nameKey]);

let interestedIn = prompt('What do you want to know about this person? Choose between firstName,lastName,age,job and friends');

if (person[interestedIn])
{
    console.log(person[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName,lastName,age,job and friends");
}
*/
//Methods
/*
let person = {
    
    firstName: "Rohit",
    lastName: "Kumar",
    age: 24
};
*/

/*
We have used function expression to create a function and assigned it to the welcome property of the person object.
Then we call the function via the welcome property as welcome().
*/
/*
person.welcome = function () {
    
    console.log("Welcome Rohit");
}

console.log(person);

person.welcome();
*/

//Method Example 2
/*
let person = {
    
    firstName: "Rohit",
    lastName: "Kumar",
    age: 24
};

function welcome() {
    console.log("Welcome Rohit");
}

function call_Person() {
    
    console.log("Person called...");
}

person.welcome = welcome;
person.call_Person = call_Person;

console.log(person);

person.welcome();

person.call_Person();
*/


//Method Example 3

/*
It is possible to define methods of an object using the object literal syntax.

ES6(EcmaScript6) provides us with the method syntax that allows us to make it shorter to define a method for an object.

*/

/*
let person = {    
    firstName: "Rohit",
    lastName: "Kumar",
    age: 24,
    welcome1: function () {
        console.log("Welcome Rohit");
    },
    welcome2: function () {
        console.log("Another method");
    }
};
person.welcome1();
person.welcome2();
*/

//Method Example 4

/*
let person = {
    firstName: "Rohit",
    lastName: "Kumar",
    job: "Designer",
    friends: ["Rahul", "Seema", "Kiran"],
    calcAge1: function (birthYear) {
        return 2022 - birthYear;
    },
    calcAge2: function (birthYear) {
        let age = 2022 - birthYear;
        return age;
    }

};

let age1 = person.calcAge1(1991);

let age2 = person.calcAge2(1998);

console.log(`Age is ${age1}`);
console.log(`Age is ${age2}`);
*/

/*
let name1 = "Javascript";

function fun()
{
    console.log(name1);
}

fun();

window.fun();
*/

//this keyword:

/*
this references the object of which the function is a property,we can say in other words this references the object that is currently calling the function.

When we call the fnc() method we can access this object.

The fnc() method is the property of the counter object, so inside the fnc() method this references the counter object.
*/
/*
let counter = {
    
    count: 0,
    fnc: function () {
        //return this.count = this.count + 1;
        return ++this.count;
    }
};
console.log(counter.fnc());
console.log(counter.fnc());
console.log(counter.fnc());
console.log(counter.fnc());
*/

//this keyword:

//this references in this example to the global object which is the window object on the web browser.

/*
console.log(this);

console.log(this === window);
*/

//If we assign a property to this object in the global context,Javascript will add the property to the global object as shown below:
/*
this.counter = 0;

console.log(++window.counter);
console.log(++window.counter);
console.log(++window.counter);
*/

/*
->In a method this refers to the owner of the method
let mobile = {
    
    brand: "Samsung",
    getBrand: function () {
        return this.brand;
    }
}

console.log(mobile.brand);
console.log(mobile.getBrand());
*/
//In a method this refers to the owner of the method
/*
let employee_details = {
  
    employeeName: "Suraj Kumar",
    city: "Chennai",
    fullAddress: function () {
        return this.employeeName + " " + this.city;
    }

};

let emp_info = employee_details.fullAddress();
console.log(emp_info);
*/

//Using alone, this refers to the global object.
/*
this.counter = 0;

console.log(++window.counter);
console.log(++window.counter);
console.log(++window.counter);
*/

//let programming_lang = "Javascript";

//Inside a function this refers to the global object
//this.programming_lang = "C#";
/*
function fnc() {
    console.log(this.programming_lang);
}

fnc();
*/

//call() method  and apply method
/*

The call() method invoke a function by functionName with a specified this value and arguments.The first argument of the call() method thisArg is the value of this, it allow us to set this value with a given object.The rest arguments of the call() method arg1...argN are arguments of the function.


apply() method

The Function.apply() method allows us to call a function with given this value and the arguments provided as an array.


The call and apply method both can be used to call a method with different object as an argument.

The apply() method is similar to call() method except that it takes the arguments of the function as an array instead of the individual arguments.
*/

/*
let emp_address = {
    full_address: function (fname,lname) {
        return this.company + " " + this.city+" "+fname+" "+lname;
    }
}

let address = {
    company: "XYZ Company",
    city: "Bangalore",
};


console.log(`Call Method: ${emp_address.full_address.call(address,"Suresh","Kumar")}`);
console.log(`Apply Method: ${emp_address.full_address.apply(address,["Ramesh","Shetty"])}`);
*/

//Bind() method

/*

This method creates a new function when called it has this which is set to a specific value.

bind() method returns a copy of the function functioName with the specific this value (thisArg) and arguments (Arg1..argN)

Unlike call() and apply() method, the bind() method does not execute immediately, it only returns the function.

The bind() method allows an object to take a method from another object without making a copy of that method, which is called function borrowing in Javascript.


*/

/*
let emp_details = {
    fullname:"Rajesh Kumar",
    full_address: function (job) {
        return this.fullname + " job role as a " + job;
    }
}

let emp_infomation = {
    fullname: "Sunil Shetty",
    my_details: function (job) {
        return this.fullname + " job role as a " + job;
    }
};


let emp1 = emp_details.full_address.bind(emp_infomation, "Designer");

console.log(emp1());
*/
/*
let mobile = {
    
    brand: "Samsung",
    getBrand: function () {
        return this.brand;
    }
}
*/
/*
In the below code, we are getting undefined instead of Samsung because when we call a method wihout specifying its object,Javascript sets this to the global object(window object).

So to fix this issue we can use bind() method which creates a new function whose this keyword is set to a specified value.

Now in this example when we call bind() method, this keyowrd is bound to the mobile object.

*/
/*
let brand = mobile.getBrand;

console.log(brand());

let brand3 = mobile.getBrand.bind(mobile);

console.log(brand3());
*/

/*
let person = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1991,
    job: 'Designer',
    friends: ["Teena", "Surraj", "Raj"],
    hasDriverlicense: true,
    calAge1: function () {
        return 2022 - this.birthYear;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calAge1()} years old.He has ${this.hasDriverlicense ? 'a' : 'no'} drivers's license.`
    }
};

console.log(person.getSummary());
*/

//in operator to check property exisits or not
/*
let employee = {
    
    firstName: "Kiran",
    empID: 1101,
    age:35
};


console.log('age' in employee);
console.log('lastName' in employee);
*/

//delete a property of an object
/*
let employee = {
    
    firstName: "Kiran",
    empID: 1101,
    age:35
};

delete employee.age;

console.log('age' in employee);

console.log(employee.age);
*/

//BMI Example

// let Raj = {
    
//     fullName: "Raj Sinha",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// let Rohit = {
    
//     fullName: "Rohit Kumar",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// Raj.calcBMI();
// Rohit.calcBMI();

// if (Raj.bmi > Rohit.bmi)
// {
//     console.log(`${Raj.fullName}'s BMI (${Math.floor(Raj.bmi)}) is higher than ${Rohit.fullName}'a BMI (${Math.floor(Rohit.bmi)})`);
// }
// else if (Rohit.bmi > Raj.bmi)
// {
//     console.log(`${Rohit.fullName}'s BMI (${Math.floor(Rohit.bmi)}) is higher than ${Raj.fullName}'a BMI (${Math.floor(Raj.bmi)})`);
// }


//Arrow function
// console.log("outside the object", this);
// let student = {
//     studentName: "Suraj",
//     getStudentName: function () {
//         //console.log("getStudentName regular function", this);
//         //
//         setTimeout(function () {
//             console.log("settimeout regular function", this);
//         },3000);
        
//         setTimeout(()=> {
//             console.log("settimeout arrow function", this);
//         },6000);
//     }

//     //  getStudentName: ()=> {
        
//     //     console.log("getStudentName arrow function", this);
//     // }
// };

// student.getStudentName();

//for in loop

/*

for(variable in referenceObject){

    referenceObject[variable]
}
for in loop executes once per each property of the object, this loop reads each property of an object, this for in loop should not be used for arrays.
*/

// let student = {
  
//     studentName: "Sam",
//     email: "sam@gmail.com",
//     branch: "CS",
//     sub1: "Graph Theory",
//     sub2: "Data Structures",
//     sub3:null
// };


// for(let prop in student){

//     console.log(prop, student[prop]);

//     if (student[prop] == null || student[prop] == undefined) {
//         console.error("Value null or undefined are not allowed");
//     }

// }
//Destructuring objects
/*
It assigns each property  value into respective variable.
If the variable name is same as property name,writing variable name is optional.
*/
// let person = {
//     firstName: "Rahul",
//     lastName: "Kumar",
//     age: 25,
//     email: "rahul@gmail.com"
// };
// let fn = person.firstName;
// let ln = person.lastName;
// let age = person.age;
// let email = person.email;
//console.log(fn,ln,age,email);
//let { firstName: fn, lastName: ln, age, email } = person;
// let { firstName, lastName, age, email } = person;
// console.log(firstName, lastName, age, email);
// let { firstName, lastName, ...others } = person;
// console.log(firstName, lastName, others);
// let { ...personDetails } = person;
// console.log(personDetails);
// console.log(personDetails.firstName);
// let { firstName: fn,   email= "r@gmail.com",age,lastName: ln, } = person;
// console.log(email);


//Destructuring function parameters

// let func1 = function ({ employeeName: empName, email, phone }) {
//     console.log(empName,email,phone);
// }

// let employee = { employeeName: "Suresh", email: "suresh@gmail.com", phone: "5654567656" };

// func1(employee);

//Inheritance using __proto__

// let person = { personName: "Suresh", age: 35 };//parent object

// let teacher = { mainSubject: "Mathematics" };//child

// let student = { rollNo: 33, marks: 55 };
// teacher.__proto__ = person;
// console.log(teacher);
// console.log(teacher.personName, teacher.age);
// console.log(teacher.__proto__);
// console.log(teacher.__proto__.personName);
// student.__proto__ = person;
// console.log(student.__proto__.personName);

//Second Example : __proto__
// let user = {
//     userName: "",
//     password: "",
//     isLoggedIn: false,
//     login: function () {
//         if (this.userName == "Admin" && this.password == "password1234") {
//             this.isLoggedIn = true;
//             return true;
//         } else {
//             this.isLoggedIn = false;
//             return false;
//         }
//     }
// }
// let manager = {
//     departmentName: "HR",
//     approvesLeaves: function () {
//         return "Approve leaves";
//     },
//     dashboard: function () {
//         return `${this.userName}'s dashboard`;
//     }
// }
// manager.__proto__ = user;
// manager.userName = "Admin";
// manager.password = "password134";

// console.log(manager.login());
// console.log(manager.approvesLeaves());
// console.log(manager.dashboard());


//Closure
//Closure is a function that contain private variable and private functions which cannot be accessed from outside the closure.

//The closure function returns an object or function, which can be accessible from outside the closure.

// function bankAccountDeposit()
// {
//     let currentBalance = 1000;

//     let deposit = function (depositAmount) {
//         currentBalance = currentBalance + depositAmount;
//         return `Account Balance:${currentBalance}`;
//     }

//     return deposit;
// }
// let deposit1 = bankAccountDeposit();
// console.log(deposit1(1500));
//console.log(deposit1.currentBalance);

//Encapsulation and closure
/*
Encapsulation is a concept of hiding some confidential data,functions to outside code, and in javascript this can be achieved using closure.
*/

// let bankAccount = function () {
//     let accountBalance = 1000;
//     let somePrivateDetails = function () {
//         console.log("Confidential Code...");
//     }

//     let deposit = function (depositAmount) {
//         accountBalance=accountBalance + depositAmount;
//     }
//     let withdraw = function (withdrawAmount) {
//         accountBalance=accountBalance-withdrawAmount;
//     }

//     let getCurrentBalance = function () {
//         return accountBalance;
//     }

//     return { deposit, withdraw, getCurrentBalance };//return public methods
// }

// let firstAccount = bankAccount();
// firstAccount.deposit(3500);
// console.log(firstAccount.getCurrentBalance());
// firstAccount.withdraw(1500);
// console.log(firstAccount.getCurrentBalance());

//Polymorphism
//Polumorphism means many-changing from one to another, which is a practice of dessigning objects to share behaviors and be able to override shared behaviors with specific ones.This can be achieved using inheritance.

// let person = {
    
//     personName: "Sam",
//     age: 25,
//     getDetails: function () {
//         return `Person Name:${this.personName}.His age is ${this.age}`
//     }
// };

// let teacher = {
    
//     mainSubject: "Mathematics",
//     getDetails: function () {
//         return ` ${this.__proto__.getDetails()} Teachers main subject: ${this.mainSubject}`
//     }
// }
// teacher.__proto__ = person;
// console.log(teacher.getDetails());


//Constructor function

//Constructor function is a function that initializes properties and methods into a newly created object.
// let createEmployee = function (employeeName, employeeID, salary) {
//     let employee = {};
//     //initialize properties and methods into that object
//     employee.employeeName = employeeName;
//     employee.employeeID = employeeID;
//     employee.salary = salary;
//     employee.getEmployeeName = function () {
//         return this.employeeName;
//     }
//     //returning the new object
//     return employee;
// }

// let employee1 = createEmployee("Sam", 2343, 45000);
// let employee2 = createEmployee("Rahul", 5555, 78000);
// console.log(employee1);
// console.log(employee2);
// console.log(employee1.getEmployeeName());
// console.log(employee2.getEmployeeName());

//new keyword
//The new keyword creates a new object and supplies the same to a constructor function as "this" object and returns the same object at the end of function.
//In case of new keyword the constructor function does not create new objects,it receives a new object,initializes properties and methods into the same.
//Inside the constructor function, "this" keyword accesses the current object.
// let Employee = function (employeeName, employeeID, salary) {
//     this.employeeName = employeeName;
//     this.employeeID = employeeID;
//     this.salary = salary;
//     this.getEmployeeName = function () {
//         return this.employeeName;
//     };
// }
// let employee1 = new Employee("Sam", 2323, 56000);
// let employee2 = new Employee("Rahul", 4423, 66000);

// console.log(employee1, employee2);
// console.log(employee1.getEmployeeName());
// console.log(employee2.getEmployeeName());

//Inheritance using constructor function
//using call method
// let Teacher = function (teacherName) {
//     this.teacherName=teacherName;
// }

// let MathTeacher = function (teacherName, mainSubject) {
    
//     Teacher.call(this, teacherName);
//     //here we are invoking parent constructor function using call,so we are supplying current object to this keyword of aprent constructor function.
//     this.mainSubject=mainSubject;
// }

// let mathTeacher = new MathTeacher("Sam", "Mathematics");

// console.log(mathTeacher);
// console.log(mathTeacher.teacherName);
// console.log(mathTeacher.mainSubject);

//Inheritance using constructor function

// let Teacher = function (teacherName) {
//     this.teacherName=teacherName;
// }

// let MathTeacher = function (mainSubject) {
    
//     this.mainSubject=mainSubject;
// }

// let mathTeacher = new MathTeacher("Mathematics");

// mathTeacher.__proto__ = new Teacher("Sam");
// //here __proto__ property of child object stores reference of parent object.
// console.log(mathTeacher);
// console.log(mathTeacher.teacherName);
// console.log(mathTeacher.mainSubject);

//prototype property of constructor function
// let Student = function () {
// }
// Student.prototype.maths = 66;
// Student.prototype.physics = 55;
// Student.prototype.biology = 77;
// //adding methods to a prototype property of constructor function
// Student.prototype.getTotalMarks = function () {
//     return this.maths + this.physics + this.biology;
// }
// let stud1 = new Student();
// console.log(stud1.getTotalMarks());
// console.log(stud1);
// console.log(stud1.__proto__);
// console.log(stud1.__proto__.getTotalMarks());
// console.log(stud1.maths);
// console.log(stud1.__proto__.physics);
// console.log(stud1.biology);


//constructor function inheritance

// function Person() {
    
// }
// Person.prototype.personName = "Sam";
// Person.prototype.age = 35;
// Person.prototype.getDetails = function () {
//     return `Person Name:${this.personName},Age:${this.age}`;
// }

// function Teacher() {
//     this.id = 1211;
// }

// Teacher.prototype = Object.create(Person.prototype);//inheritance
// Teacher.prototype.mainSubject = "Mathematics";

// let teacher = new Teacher();
// console.log(teacher);

// console.log(Person.prototype);
// console.log(Object.create(Person.prototype));//{__proto__:ref to Object 1}

// console.log(Teacher.prototype);//object 2

// console.log(new Teacher());//__proto__:refers to Object 2

// console.log(new Teacher().__proto__.__proto__);//object 1 (Person)

// console.log(teacher.mainSubject);
// console.log(teacher.personName);
// console.log(teacher.getDetails());
// console.log(teacher.age);

//Polymorphism with constructor function
// function Person() {
// }
// Person.prototype.personName = "Sam";
// Person.prototype.age = 35;
// Person.prototype.getDetails = function () {
//     return `${this.personName},${this.age}`;
// }
// function Teacher() {
//     this.id = 1211;
// }
// Teacher.prototype = Object.create(Person.prototype);//inheritance
// Teacher.prototype.mainSubject = "Mathematics";
// Teacher.prototype.getDetails = function () {
//     return `${this.__proto__.getDetails()} Main Subject:${this.mainSubject}`;
// }

// let person1 = new Person();
// console.log(person1.getDetails());
// let teacher1 = new Teacher();
// console.log(teacher1.getDetails());


//Abstract constructor function:
function Person() {
    throw new Error("The Person is an abstract constructor function and it can't be instantiated...");
}
Person.prototype.personName = "Sam";
Person.prototype.age = 35;
Person.prototype.getDetails = function () {
    return `${this.personName},${this.age}`;
}
function Teacher() {
   // this.id = 1211;
}
Teacher.prototype = Object.create(Person.prototype);//inheritance
Teacher.prototype.mainSubject = "Mathematics";
Teacher.prototype.getDetails = function () {
    return `${this.__proto__.getDetails()} Main Subject:${this.mainSubject}`;
}

//let person1 = new Person();
//Abstraction means identifying only the required characteristics of an object,ignoring the irrelevant details.
//The parent abstract constructor function constains only the proeprties and methods that are actually necessary at the outside of constructor function.

let teacher1 = new Teacher();
console.log(teacher1.getDetails());

