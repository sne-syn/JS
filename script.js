// "use strict";

// var money = prompt("Ваш бюджет на месяц?");
// var time = prompt("Введите дату в формате YYYY-MM-DD");

// var  appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: false
//  };

// var exp1 = prompt("Введите обязательную статью расходов в этом месяце", "");
// var exp2 = prompt("Во сколько обойдется?", "");
// var exp3 = prompt("Введите обязательную статью расходов в этом месяце", "");
// var exp4 = prompt("Во сколько обойдется?", "");

// appData.expenses.exp1 = exp2;
// appData.expenses.exp3 = exp4;

// alert(appData.budget / 30);

// var user = {
//   name: "Misha",
//   surname: "Petrov",
// };

// var hobbie = {
//     favorite: "music",
//     nextOne: "movie"
// };

// hobbie.nextOne = "tree";

// console.log("nextOne" in hobbie);
// console.log(hobbie.nextOne);

// console.log(user.name);
// console.log(user.surname);

// if ("nextOne" in hobbie) {
//     console.log(true);
// }

// var user = {};

// user.name = "Vasia";
// user.surname = "Petrov";
// user.name = "Misha";

// console.log(user.name);

// let num = 49;

// if (num < 49) {
//     console.log("Неверно");
// } else if (num > 100) {
//     console.log("Многовато!");
// } else {
//     console.log("Верно!");
// }

// let num = 50;


// var num = 50;

// switch (num) {
//     case 49:
//         console.log("you need more");
//         break;
//     case num > 100:
//         console.log("too much");
//         break;
//     case num > 80:
//         console.log("too much also");
//         break;
//     case 50:
//         console.log("i like it");
//         break;
//     default:
//         console.log("What's wrong?");
//         break;
// }


// var a = 5 + 5;

// switch (a) {
//     case 8:
//       console.log("Try one more time!");
//       break;
//     case 12:
//       console.log("Oh my God! Where did you get that number?");
//       break;
//     case 9:
//       console.log("Good job, commander");
//       break;
//     default:
//       console.log("Are you still here? Hello?");
//       break;
// }

// if (a <= 8) {
//     console.log("Try one more time!");
// } else if (a >= 10) {
//     console.log("Oh my God! Where did you get that number?");
// } else if (a == 9) {
//     console.log("Good job, commander");
// } else {
//     console.log("Are you still here? Hello?");
// }

// https://learn.javascript.ru/switch 

// var browser = "blabla";

// if (browser == "IE") {
//     console.log("О, да у вас IE!");
// } else if (browser == "Chrome" || browser == "Firefox" || browser == "Opera" || browser == "Safari") {
//     console.log("Да, и эти браузеры мы поддерживаем");
// } else {
//     console.log('Мы надеемся, что и в вашем браузере все ок!');
// }

// var a = +prompt("a?", "");

// switch (a) {
//   case 0:
//     console.log(0);
//     break;
//   case 1:
//     console.log(1);
//     break;
//   case 2:
//   case 3:
//     console.log("2, 3");
//     break;
//   default:
//     console.log("Все идет по плану!");
//     break;
// }

// ------

// Циклы  

// let numm = 50;

// while (numm < 55) {
//     console.log(numm);
//     numm++;
// }

// do {
//     console.log(numm);
//     numm++;
// }
// while (numm < 55);

// // let button = 1;

// for (let button = 2 + 1; button < 508; button = button * 2) {
//     console.log(button);
// }

// JS course udemy: Function

// function calc(a,b) {
//   return (a + b);
// }

// console.log(calc(3,4));
// console.log(calc(5,4));
// console.log(calc(2,4));


// function retVar() {
//   let num = 50;
//   return num;
// }

// let anotherNum = retVar() * 2;
// console.log(anotherNum);

// let str = "test";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let result = "12.2px";
// console.log(Math.round(result)); // NaN
// console.log(parseInt(result));
// console.log(parseFloat(result));


// learn.javascript exercises function ()


// call-back function 

function writePoem(first, second) {
    console.log("Я вас любил" + first);
    second();
}

writePoem(", подумал Пушкин!", function () {
    (console.log("Открыл блокнот, включил планшет"));
});

function third(line) {
    console.log("Любил, любовь" + line);
}

third(" еще быть может");

function fourth(lastLine) {
    console.log("Загуглил, " + lastLine);
}

fourth(" вроде не баян");

// showMessage - call-back function

function showMessage (greeting, smallTalk) {
    var text = "Hello darkness";
    alert(text + ", " + greeting);
    smallTalk();
}

showMessage ("my old friend ", function () {
    (alert("I've come to talk with you again"));
});

// basic functions

function singSong (line1, line2) {
    if (line2 === undefined) {
        line2 = "...";
      }
    console.log (line1 + " " + line2);
}

singSong ("Me has dejado sin luz en las noches tremendo dolor.",
"Luna llena me siento tan sólo.");

function singOneSong (line) {
    var anaphora = "Luna llena";
    console.log (anaphora + " " + line);
}

singOneSong ("ya no estas, Si está noche no vienes te juro que voy a llorar." );