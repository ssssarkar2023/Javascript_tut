class Person{
    personName;
    age;
    constructor(personName, age) {
        this.personName = personName;
        this.age = age;
    }

    getDetails() {
        return `Person Name:${this.personName},Age:${this.age}`;
    }
}

class Teacher extends Person{
    mainSubject;
    constructor(personName, age, mainSubject) {
        super(personName, age);
        this.mainSubject= mainSubject;
    }

    getDetails() {
        return `${super.getDetails()},Main Subject: ${this.mainSubject}`;
    }
}


let person = new Person("Sam", 44);
console.log(person);

let teacher = new Teacher("Suraj", 22, "Mathematics");

console.log(teacher);

//console.log(person.getDetails());
console.log(teacher.getDetails());


