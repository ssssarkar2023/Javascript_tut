class Person{
    personName;
    age;
    constructor(personName, age) {
        if (this.constructor == Person) {
          throw new Error(`Abstract class Person can't be instantiated`);
     }
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
        this.mainSubject = mainSubject;
    }

    getDetails()
    {
        return `${super.getDetails()},Main Subject:${this.mainSubject}`;
    }
}

// let person = new Person("Sam", 44);

let teacher = new Teacher("Suraj", 35, "Mathematics");

console.log(teacher);
console.log(teacher.getDetails());
