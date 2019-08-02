let beginCalcBtn = document.getElementById('start'), //получить начать расчет через id

 budgetVal = document.querySelector('.main .result .budget-value'),
 daybudgetVal = document.querySelector('.main .result .daybudget-value'),
 levelVal = document.querySelector('.main .result .level-value'),
 expensesVal = document.querySelector('.main .result .expenses-value'),
 optionalExpensesVal = document.querySelector('.main .result .optionalexpenses-value'),
 incomeVal = document.querySelector('.main .result .income-value'),
 monthSavingsVal = document.querySelector('.main .result .monthsavings-value'),
 yearSavingsVal = document.querySelector('.main .result .yearsavings-value'),

 buttons = document.getElementsByTagName('button'),
 approveExpensesBtn = buttons[0],
 approveOptExpensesBtn = buttons[1],
 сalculateBtn = buttons[2],

 expenses = document.getElementsByClassName('expenses-item'),
 optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
 possibleExpenses = document.querySelector('.choose-income'),

 chkSavings = document.querySelector('#savings'),

 sumVal = document.querySelector('.choose-sum'),
 procentVal = document.querySelector('.choose-percent'),

 year = document.querySelector('.year-value'),
 month = document.querySelector('.month-value'),
 day = document.querySelector('.day-value');

 let money, time;

//обработчик для кнопки "Начать расчет - начало приложения"

beginCalcBtn.addEventListener('click', function() {

    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }

    appData.budget = money;
    budgetVal.textContent = money.toFixed();
    appData.timeData = time;
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth()+1;
    day.value = new Date(Date.parse(time)).getDate();

});

approveExpensesBtn.addEventListener('click', function(){

    let summOfExpenses = 0;

    for (let i = 0; i<expenses.length; i++) {

        
        let firstAnswer = expenses[i].value;
        let secondAnswer = expenses[++i].value;
         
        if ( (typeof(firstAnswer))== 'string' && (typeof(firstAnswer)) != null 
         && (typeof(secondAnswer)) != null && firstAnswer != '' && secondAnswer != '' )  {

                appData.expenses[firstAnswer] = secondAnswer;
                summOfExpenses += +secondAnswer;

         } else {
             i--;
         }

        
    }

    expensesVal.textContent = summOfExpenses;
});


approveOptExpensesBtn.addEventListener('click',function(){

    for (let index = 0; index < optionalExpenses.length; index++){
        let expense = optionalExpenses[index].value;
        appData.optionalExpenses[index] = expense;
     }


     for (const key in appData.optionalExpenses) {

        optionalExpensesVal.textContent += appData.optionalExpenses[key] + " ";
     }


});

сalculateBtn.addEventListener('click', function(){

    if (appData.budget != undefined) {

        appData.moneyForDay = (appData.budget/30).toFixed();
        daybudgetVal.textContent = appData.moneyForDay; 
    
        if (appData.moneyForDay < 100) {
            levelVal.textContent = "You're on low budget";
        } else if (appData.moneyForDay > 100 && appData.moneyForDay < 400) {
            levelVal.textContent = "You're wouldnt die today,maybe";
        } else {
            levelVal.textContent = "You're rich man";
        }
    } else {
        daybudgetVal.textContent = "Error"; 
    }

});


possibleExpenses.addEventListener('input', function(){

    let items =  possibleExpenses.value;

    if ( (typeof(items))== 'string' && (typeof(items)) != null && items != ''  ) {

    incomeVal.textContent = items.split(", ");

} else {
    incomeVal.textContent = "Введите значения";
} 
    

} );

chkSavings.addEventListener('click', function(){

    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumVal.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +sumVal.value;
            percent = +procentVal.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

       monthSavingsVal.textContent = appData.monthIncome.toFixed(1);
       yearSavingsVal.textContent = appData.yearIncome.toFixed(1);
    }
}); 



procentVal.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +sumVal.value;
        percent = +procentVal.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsVal.textContent = appData.monthIncome.toFixed(1);
        yearSavingsVal.textContent = appData.yearIncome.toFixed(1);
    }
}); 
    


var appData = {
        budget: money,
        timeData: time,
        expenses : {},
        optionalExpenses : {},
        income: [],
        savings: false

};


















