// "use strict";

// let money = +prompt("Ваш бюджет на месяц?", "");
// let time = prompt("Введите дату в формате YYYY-MM-DD", "");

// let appData = {
//   budget: money,
//   timeData: time,
//   expenses: {},
//   optionalExpenses: {},
//   income: [],
//   savings: false
// };

// // let exp1 = prompt("Введите обязательную статью расходов в этом месяце", "");
// // let exp2 = prompt("Во сколько обойдется?", "");
// // let exp3 = prompt("Введите обязательную статью расходов в этом месяце", "");
// // let exp4 = prompt("Во сколько обойдется?", "");

// // // let expenses = {};
// // appData.expenses.exp1 = exp2;
// // appData.expenses.exp3 = exp4;


// for (let i = 0; i < 2; i++) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//   let b = prompt("Во сколько обойдется?", "");

//   if ( (typeof(a))=== "string" && (typeof(a)) != null  && (typeof(b)) != null 
//   && a != "" && b != "" && a.length < 50) {
//     console.log("done");
//     appData.expenses[a] = b;
//   }
// };

// appData.moneyPerDay = appData.budget / 30;

// alert("Ежедневный бюджет:" + appData.moneyPerDay);

// if (appData.moneyPerDay < 100) {
//   console.log("Минимальный уровень достатка");
// }  else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//   console.log("Средний уровень достатка");
// } else if (appData.moneyPerDay > 2000) {
//   console.log("Высокий уровень достатка");
// }  else {
//   console.log("Что-то пошло не так");
// }



"use strict";

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");


let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};



for (let i = 0; i < 2; i++) {
  let exp1 = prompt("Введите обязательную статью расходов в этом месяце", "");
  let exp2 = prompt("Во сколько обойдется?", "");

  if ( (typeof(exp1))=== "string" && (typeof(exp1)) != null  && (typeof(exp2)) != null  && exp1 != "" && exp2 != "" && exp1.length < 50) {
    console.log("Процесс пошел!");
    appData.expenses[exp1] = exp2;
  } else {
    console.log("Ups! Try one more time");
    i--;
  }
}

if (appData.budget < 100) {
  console.log("Минимальный уровень достатка!");
} else if (appData.budget > 100 && appData.budget < 2000)  {
  console.log("Средний уровень достатка!");
} else if (appData.budget > 2000)  {
  console.log("Высокий уровень достатка!");
} else {
  console.log("Хьюстон, у нас проблема");
}

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет:" + appData.moneyPerDay);