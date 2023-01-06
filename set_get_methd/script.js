class Person{
    #personName;
    #age;   
    setPersonName(value) {

        //personName should not be null or undefined
        if (value == undefined || value == null) {
            console.error("Null or undefined is not allowed for personName");
        }
        else {
            if (value.length >= 25) {
                console.error("PersonName length can't be more than 25 characters");
                
            } else {
                this.#personName = value;
            }
        }
        
    }
    getPersonName() {
        return `${this.#personName}`;
    }

    setAge(value) {
        if (value > 0 && value <= 100) {
            this.#age = value;
        } else {
            console.error("Age should be in between 1 to 100 only");
        }
    }
    getAge() { return this.#age; }
}

let person1 = new Person();

// person1.setPersonName(null);
// person1.setPersonName("dsdskdsklfjlksjfklsjflkjdlkfjlksjf");
person1.setPersonName("Sam Shetty");
// person1.setAge(120);
person1.setAge(33);

console.log(person1.getPersonName());
console.log(person1.getAge());