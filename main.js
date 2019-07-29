let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

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
            this.income.forEach(element => { 
                alert("Методы доп заработка:"+ element); 
            });

        },

        printSelf: function() {
            for (const key in this) {
                alert("Наша программа включает в себя данные:" + key );
            }
        }

};

appData.printSelf();















