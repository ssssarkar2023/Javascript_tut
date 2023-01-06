/*
Constructor is a special function in the class that executes everytime when a new object is created for the class.

Constructor is mainly used for initializing properties in the class.

Constructor can recieve one or more paramteres and a class can have only one constructor in Javascript.
In Javascript multiple constructors in the same class are not allowed.

*/
class Employee{
    empName;
    empAge;
    empEmail;

    constructor(empName,empAge,empEmail) {
        // console.log("Employee constructor");
        this.empName = empName;
        this.empAge = empAge;
        this.empEmail = empEmail;
    }
}
let employee1 = new Employee("Suresh", 44, "suresh@gmail.com");
console.log(employee1);
console.log(employee1.empName,employee1.empAge,employee1.empEmail)

let employee2 = new Employee("Rakesh", 24, "rakesh@gmail.com");
console.log(employee2);
console.log(employee2.empName, employee2.empAge, employee2.empEmail);



