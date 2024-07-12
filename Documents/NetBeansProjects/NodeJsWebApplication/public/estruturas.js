
const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendindex(fruit, index) {
    console.log(`${index}. ${fruit}`);

}
//Estrutura de dados com forEach
fruits.forEach(appendindex);

const nums = [0, 10, 20, 30, 40, 50];
//Estrutura de dados com filter
nums.filter(function (num) {
    return  num > 20;
});
//Estrutura de dados com Map
[0, 10, 20, 30, 40, 50].map(function (num) {
    return num / 10;
});

// estrutura de dados de objeto
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
};
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
    result.push(key, drone[key]);
});

console.log(result);

// Map
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The Third place");

console.log(bestBoxers);

// Set ou Conjuntos

const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
