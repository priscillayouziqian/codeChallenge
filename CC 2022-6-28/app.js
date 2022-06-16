// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9

function squareSum(numbers){
    //first, make the parameter array become square numbers. Declare a new array, using map()
    let squareNums = numbers.map(numbers => numbers**2)

    //then, get the sum of array squareNums, using reduce()
    return squareNums.reduce( (previousValue,currentValue) => previousValue+currentValue, 0 )
}

squareSum([1,2]) //return 5
squareSum([0, 3, 4, 5]) //return 50
squareSum([]) //return 0

//Add another solution which is less codes
function squareSum(numbers){
    return numbers.reduce((a,b) => a + b**2, 0)
}