// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    addHobby(hobby) {
        this.hobbies.push(hobby);

    }

    removeHobby(rmHobby) {
        this.hobbies = this.hobbies.filter((hobby) => hobby != rmHobby);
    }

    greeting() {
        console.log("Hello fellow person!");

    }

    info() {

    }
}

let person = new Person ("Reece", 1, "Detroit", ["hockey", "music", "games"]);

//Exercise 2 and 3
class Coder extends Person {
    constructor(name, pets, residence, hobbies) {
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer";
    }

    greeting(){
        console.log("Hello World! I'm a coder!");
    }
}

const myCoder = new Coder("Harrison", 32, "Condo", ["mows the lawn", "snowblowing", "smithing"]);
console.log(myCoder);
myCoder.greeting();


//Exercise 4

class Calculator{
    constructor(){
        this.result = 0;
    }

    add(a, b){
        if (typeof a == "number"){
            if (b || b == 0){
                this.result = a + b;
            }else{
                this.result = this.result + a;
            }
        }    
        
        return this.result;
    }

    subtract(a, b){
        if (b || b == 0){
            this.result = a - b;
        }else{
            this.result = this.result - a;
        }
        
        return this.result;

    }

    multiply(a, b){
        if (b || b == 0){
            this.result = a * b;
        }else{
            this.result = this.result * a;
        }
        
        return this.result;
    }

    divide(a, b){
        if (b){
            this.result = a / b;
        }else{
            this.result = this.result / a;
        }
        
        return this.result;
    }

    displayResult(){
        console.log(this.result);
    }
}

const myCalc = new Calculator();

console.log(myCalc);
//myCalc.add(1000, 0);
//myCalc.displayResult();

myCalc.add(50, 0);
myCalc.displayResult();
myCalc.subtract(4);
myCalc.displayResult();
myCalc.divide(2);
myCalc.displayResult();
myCalc.multiply(4);
myCalc.displayResult();



//Exercise 1 tests
person.addHobby("girls");

////console.log(person);

person.removeHobby("games");

console.log(person);