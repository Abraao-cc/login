class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights(){
        this.lightsOn = !this.leghtsOn;
    }
     lightsStatus(){
         console.log('Lights on?', this.leghtsOn);
     }
     getSelf(){
         console.log(this);
     }
     getProtype(){
         var proto = Object.getPrototypeOf(this);
         console.log(proto);
     }
}

//var myFirstTrain = new Train('red',false);
var myFirstTrain4 = new Train('red',false);
console.log(myFirstTrain4.toggleLights());
console.log(myFirstTrain4.lightsStatus);
console.log(myFirstTrain4.getSelf());
console.log(myFirstTrain4.getProtype);