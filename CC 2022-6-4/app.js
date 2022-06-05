// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 
// The input will not be 0.

function nthEven(n){
    //input will not be 0
    return 2*n - 2
}

//Example:
nthEven(1) //should return 0
nthEven(2) //should return 2
nthEven(3) //should return 4
nthEven(100) //should return 198
nthEven(1298734) //should return 2597466