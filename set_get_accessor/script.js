class Person
{
    #personName;
    #age;

        //Access properties won't store any data, but contains 'set' and 'get' methods to let developer to add custom logic that should execute when the user tries to set/get the value.
    set PersonName(value) {
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

    get PersonName() {
        return `${this.#personName}`;
    }

    set Age(value) {
          if (value > 0 && value <= 100) {
            this.#age = value;
        } else {
            console.error("Age should be in between 1 to 100 only");
        }
    }
    get Age() { return this.#age; }
   
}

let person1 = new Person();

person1.PersonName = "Suresh";//set
person1.Age = 44;//set

console.log(person1.PersonName);//get
console.log(person1.Age);//get


