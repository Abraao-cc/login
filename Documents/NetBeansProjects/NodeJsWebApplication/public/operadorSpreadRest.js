

let top3 = ["The Colosseum","Trevi Fountain","The Vatican City"];
function showItinerary(place1,place2,place3) {
    console.log("Visit " + place1);
    console.log("Then Visit " + place2);
    console.log("Finish with a visit to " + place3);
}

//showItinerary(top3[0],top3[1],top3[2]);
showItinerary(...top3);

//Operador de descanso
const top7 = ["The Colosseum","Trevi Fountain","The Vatican City","The Pantheon","piazza Veneza","The palatine Hill"];


function addTaxToPrices(taxRate, ...itemBought) {
    return itemBought.map(item => taxRate * item);
    
}

let shoppingCart = addTaxToPrices(1.1,46,89,35,79);

 console.log(shoppingCart);
 
 //Unir matrizes e objetos usando o operador rest
 const fruits = ['apple','pear','plum'];
 const berries = ['blueberry','strawberry'];
 const fruitsAndBerries = [...fruits, ...berries];
 
 console.log(fruitsAndBerries);
 //Adicione novos membros a matrizes sem usar o métodopush()
 let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

//Converter uma string em uma matriz usando o operador spread
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars);
//Copie um objeto ou uma matriz em uma matriz separada
const car1 = {
    speed: 200,
    color: 'yellow'
};
const car2 = {...car1};

car1.speed = 201;

console.log(car1.speed, car2.speed);