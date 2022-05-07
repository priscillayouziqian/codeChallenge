// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

const arr = N =>{ //arr is function name, N is parameter
    let arr = []
    for (i=0; i<N; i++){ //we need numbers until N-1, so index loop to i<N
        arr.push(i) //add each number to the empty array
    }
    return arr
} 

// For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
arr(6) //  => [0,1,2,3,4,5]
arr(7)  //  => [0,1,2,3,4,5,6]