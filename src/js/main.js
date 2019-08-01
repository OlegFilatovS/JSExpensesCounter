let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let beginCalcBtn = document.getElementById('start'); //получить начать расчет через id
let budgetVal = document.querySelector('.main .result .budget-value');
let daybudgetVal = document.querySelector('.main .result .daybudget-value');
let expensesVal = document.querySelector('.main .result .expenses-value');
let optionalExpensesVal = document.querySelector('.main .result .optionalexpenses-value');
let incomeVal = document.querySelector('.main .result .income-value');
let monthSavingsVal = document.querySelector('.main .result .monthsavings-value');
let yearSavingsVal = document.querySelector('.main .result .yearsavings-value');
let buttons = document.getElementsByTagName('button');
let approveExpensesBtn = buttons[0];
let approveOptExpensesBtn = buttons[1];
let CalculateBtn = buttons[2];
let expenses = document.getElementsByClassName('expenses-item');
let optionalExpenses = document.querySelectorAll('.optionalexpenses-item');
let possibleExpenses = document.querySelector('.choose-income');

let checkbox = document.querySelector('#savings');
let summ = document.querySelector('.choose-sum');
let procent = document.querySelector('.choose-percent');
let year = document.querySelector('.year');
let month = document.querySelector('.month');
let day = document.querySelector('.day');


var appData = {
        budget: money,
        timeData: time,
        expenses : {},
        optionalExpenses : {},
        income: [],
        savings: false,

        chooseExpenses: function() {
            for (let i = 0; i<2; i++) {
                let firstAnswer = prompt("Введите обязательную статью расходов в этом месяце");
                let secondAnswer = prompt("Во сколько обойдется?");
                 
                if ( (typeof(firstAnswer))== 'string' && (typeof(firstAnswer)) != null 
                 && (typeof(secondAnswer)) != null && firstAnswer != '' && secondAnswer != '' )  {
                        console.log("done");
                        appData.expenses[firstAnswer] = secondAnswer;
            
                 } else {
                     i--;
                 }
            }
        },

        detectDayBudget: function() {
            appData.moneyForDay = (appData.budget/30).toFixed();
            alert("Ежедневный бюджет:" + appData.moneyForDay);
        },

        detectIncomeLevel: function() {
            if (appData.moneyForDay < 100) {
                console.log("You're on low budget");
            } else if (appData.moneyForDay > 100 && appData.moneyForDay < 400) {
                console.log("You're wouldnt die today,maybe");
            } else {
                console.log("You're rich man");
            }
        },

        checkSavings: function() {
            if (appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?"),
                    percent = +prompt("Под какой процент?");

                appData.monthIncome = save/100/12*percent;
                alert('Месячный доход с депозита:'+ appData.monthIncome);
            }
        },

        chooseOptionalExpenses: function() {
            for (let index = 1; index < 3; index++){
               let expense = prompt("Статья расходов?");
               appData.optionalExpenses[index] = expense;
            }
        },

        chooseIncome: function() {
            let items = prompt("Что принесет дополнительный доход? Перечислите через запятую");
            if ( (typeof(items))== 'string' && (typeof(items)) != null && items != ''  ) {
            appData.income = items.split(", ");
            appData.income.push(prompt("Smth else?"));
            appData.income.sort();
        } else {
            this.chooseIncome();
        } 
            this.income.forEach(function(item,i) { 
                alert("Методы доп заработка:"+ (i+1) +" "+ item); 
            });

        },

        printSelf: function() {
            for (let key in this) {
                alert("Наша программа включает в себя данные:" + key + " с значением" + this[key] );
            }
        }

};111


















