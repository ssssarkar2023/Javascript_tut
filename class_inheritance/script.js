
//WHen the object can access the properties and methods of other object, it is called as inheritance, which can be achieved using extends keyword.
//Child class can access all properties and methods of parent class.

class Teacher{

    teacherName;

    constructor(teacherName)
    {
        this.teacherName = teacherName;
    }
}


class MathTeacher extends Teacher{

    mainSubject;

    constructor(mainSubject) {
        super("Suraj");
        this.mainSubject = mainSubject;
    }

    getDetails() {
        return `Teacher Name:${this.teacherName} Main Subject:${this.mainSubject}`;
    }
}

let teacher1 = new Teacher("Sam");
//console.log(teacher1.teacherName);
let mathTeacher = new MathTeacher("Mathematics");

//console.log(mathTeacher.mainSubject);
//console.log(mathTeacher.teacherName);
console.log(mathTeacher.getDetails());