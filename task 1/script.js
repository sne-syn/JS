"use strict";

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

// let appData = {};
// appData.budget = money;
// appData.timeData = time;
// appData.expenses = {};
// appData.optionalExpenses = {};
// appData.income = [];
// appData.savings = false;

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

let exp1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let exp2 = prompt("Введите обязательную статью расходов в этом месяце", "");
let exp3 = prompt("Во сколько обойдется?", "");
let exp4 = prompt("Во сколько обойдется?", "");

let expenses = {};
expenses.exp1 = exp3;
expenses.exp3 = exp4;


// let expenses = {
//     exp1: exp3,
//     exp2: exp4
// };

alert(appData.budget/30);