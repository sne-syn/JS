/* Получить случайное число, с плавающей точкой между 0 и 1. (number >= 0 && number < 1)  */
function getRandom() {
  console.log(Math.random());
}

getRandom();

//Случайное число в интервале [min, max]

function getRandomFloat(min, max) {
  console.log(Math.random() * (max - min) + min);
}

getRandomFloat(11, 101);

//Whole number with .floor()

function getRandomInt(min, max) {
    console.log(Math.floor(Math.random() * (max - min)) + min);
}

getRandomInt(55, 68);

//

function getRandomInt(min, max) {
 console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}

getRandomInt(55, 68);

// Монетка (орел или решка)

function coinFlip() {
    console.log((Math.floor(Math.random() * 2) === 0) ? "head" : "tail");

    /*
    Условный (тернарный) оператор 
    condition ? val1 : val2 =>  
    ... ? "head" : "tail"
    */
}

coinFlip();