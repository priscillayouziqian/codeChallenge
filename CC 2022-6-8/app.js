// JS and Ruby also support the ternary operator and Python has something similar too:

// condition ? statementa : statementb
// Condition and statement separated by "?", different statement separated by ":" in both Ruby and JS; in Python you put the condition in the middle of two alternatives. The two examples above can be simplified with ternary operator:

// function oddEven(n){
//   return n%2==1 ? "odd number" : "even number";
// }
// function oldYoung(age){
//   return age<16 ? "children" : age<50 ? "young man" : "old man";
// }
// Task:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
//You can use if..else or ternary operator to complete it.

function saleHotdogs(n){
    //we need to return how much the customer need to pay in total: n is number, price is the single price, total price should n * single price accordingly.
    return (n<5) ? n * 100 : (n>=5 && n<10) ? n * 95 : n * 90
}

//examples:
saleHotdogs(1) //100
saleHotdogs(5) //475
saleHotdogs(10) //900