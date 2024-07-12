var dairys = ['cheese', 'sour cream','milk','yogurt','ice cream','milkshake'];


function logDairy() {
    for (var dairy of dairys) {
        console.log(dairy);
        
    }
}


logDairy();


const animal = {
    canJump: true
};
const bird = Object.create(animal);
bird.canFly =true;
bird.hasFeathers = true;

function birdCan() {
    for (const bir of Object.keys(bird)) {
        console.log(bir + ": " + bird[bir]);
    }
  
}



function animalCan() {
    for (var bir in bird) {
         console.log(bir + ": "+bird[bir]);
    }
}


animalCan();
