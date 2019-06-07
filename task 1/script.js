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
let exp2 = prompt("Во сколько обойдется?", "");
let exp3 = prompt("Введите обязательную статью расходов в этом месяце", "");
let exp4 = prompt("Во сколько обойдется?", "");

// // let expenses = {};
// appData.expenses.exp1 = exp2;
// appData.expenses.exp3 = exp4;


appData.expenses = {
    exp1: exp2,
    exp3: exp4
};

alert(appData.budget/30);