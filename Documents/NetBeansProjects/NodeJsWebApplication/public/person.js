// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
        console.log('Energy is increasing, currently at:', this.energy);
    }
    doSomethingFun() {
        this.energy -= 10;
        console.log('Energy is increasing, currently at:', this.energy);
    }
}

// Task 2: Code a Worker class

// Task 3: Code an intern object, run methods
class Worker extends Person {
    constructor(xp = 0, hourlyWage = 10, name, age, energy) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
        console.log('XP is increasing, currently at:', this.xp);
    }

}

// Task 3: Code an intern object, run methods
function  intern() {
    var work = new Worker(0, 10, "Bob", 21, 110);
    work.goToWork();
    return work;
}
// Task 4: Code a manager object, methods
function  manager() {
    var manager = new Worker(100, 30, 'Alice', 30, 120);
    manager.doSomethingFun();
    return manager;
}


console.log(intern());
console.log(manager());


function testBracketsDynamicAccess() {
    var dynamicKey;
    if (Math.random() > 0.5) {
        dynamicKey = "speed";
    } else {
        dynamicKey = "color";
    }
    var drone = {
        speed: 15,
        color: "orange"
    };
    console.log(drone[dynamicKey]);
}

testBracketsDynamicAccess();


const car = {
    engine: true,
    steering: true,
    speed: "slow"
};
 const sportsCar = Object.create(car);
 sportsCar.speed = "fast";
 console.log("The sportsCar object: ", sportsCar);
 
  console.log('----- for-in is unreliable -----');
  for(prop in sportsCar){
      console.log(prop);
  }
  console.log('emoj', "Iterating over object AND its prototype!");
  
    console.log('----- for-in is reliable -----');
    
    for (prop of Object.keys(sportsCar)) {
        console.log(prop +": "+ sportsCar[prop]);    
}
 console.log('emoj', "Iterating over object OWN  prototype only!");
