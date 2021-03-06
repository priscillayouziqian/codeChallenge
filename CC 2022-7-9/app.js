// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

//solution 1:
function basicOp(operation, value1, value2){
    if(operation == '+'){
        return value1 + value2;
    }
    if(operation == '-'){
        return value1 - value2;
    }
    if(operation == '*'){
        return value1 * value2;
    }
    if(operation == '/'){
        return value1 / value2;
    }
}
basicOp('-',2,3) //-1
basicOp('+',4,7) //11
basicOp('*',5,5) //25

//solution 2:
function basicOp(operation, value1, value2){
    switch(operation){
        case '+': return value1+value2;
        break;
        case '-': return value1-value2;
        break;
        case '*': return value1*value2;
        break;
        case '/': return value1/value2;
        default: return 0
    }
}
basicOp('-',2,3) //-1
basicOp('+',4,7) //11
basicOp('*',5,5) //25