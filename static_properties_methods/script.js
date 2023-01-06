
//Static properties and methods contain common detals or code of all objects.
//Static properties and methods are declared with static keyword.
//Static properties and methods are accessible with class name rather than object name.
class Student{
    studentName;
    marks;
    constructor(studentName, marks) {
        this.studentName = studentName;
        this.marks = marks;
        Student.studentCount++;
    }
    static compareStudentMarks(stud1, stud2) {
        return stud1.marks - stud2.marks;
    }
    static studentCount = 0;
}

let student1 = new Student("Rakesh", 55);
let student2 = new Student("Suraj", 35);
console.log(student1);
console.log(Student.studentCount);

console.log(Student.compareStudentMarks(student1, student2));