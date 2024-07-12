document.getElementById("saudacao").innerHTML = "Olá mundo!!!";

function saudacao() {
    console.log("Hello World!");
}

var user = {};
var assistantManager = {
    rangerTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    heath: 40,
    specialAbility: "young and ambitious",
    greeting: "Let´s make some money"

};

console.log(assistantManager.heath);

function addTwoNums(a, b) {
    try {
        if (typeof (a) != 'number') {
            new ReferenceError('the first argument is not a number');
        } else if (typeof (b) != "number") {
            new ReferenceError('the second argument is not a number');
        } else {
            console.log(a + b);
        }
    } catch (e) {
        console.log("Error!", e);
    }
}

addTwoNums(5, "5");
console.log("skills");


function letterFinder(word, match) {
    var condition1 = typeof (word) == 'string' && word.length >= 2;
    var condition2 = typeof (match) == 'string' && match.length == 1;
    if (condition1 && condition2) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] == match) {
                console.log('Found the', match, 'at', i);
            } else {
                console.log('---No match found at', i);
            }
        }
    } else {
        console.log("Please pass correct arguments to the function")
    }



}
letterFinder([], []);
letterFinder("cat", "c");



// Task 1: Build a function-based console log message generator
function  consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;
    console.log(message, style);
}


// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px";
    if (reason === "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason === "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {

        console.log(reason, fontStyle);
    }

}
// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');
// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}

// Call styleAndCelebrate
styleAndCelebrate(`#ef7c8e`, `#fae8e0`, `30px`, `You made it!`, `champions`);


function meal(animal) {
    animal.food = animal.food + 10;
}
var dog = {
    food: 10
};
meal(dog);
meal(dog);
console.log(dog.food);

