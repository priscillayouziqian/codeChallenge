// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n){
    return n.toString().split('').reverse().map(Number)
}

digitize(52867) //[ 7, 6, 8, 2, 5 ]
digitize(98653) //[ 3, 5, 6, 8, 9 ]
digitize(1123) //[ 3, 2, 1, 1 ]