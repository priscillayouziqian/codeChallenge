// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.
//Parameter: Given array A, and rando value X. Want to see if A has X in it. A can have numbers, strings, X can be a number or a string. Is it ever empty? Underfined? Waht do we do about special characters?
//Return: True if X is in A, false if X is not. But True, False (boolean)
//Examples: Given [1,2,3] as A and 4 as X, should return false.
//          Given [7,6,3,2] as A and 6 as X, should return true.
//          Given [] as A and 5 as X, should return false.
//P: Make a function that takes in two parameters: an array, and a rando number.
function numInArray(arr,num){
    //look through the array and see if there are any elements that match num.
    return arr.includes(num)
    //conditional: if they do, return True. else return false.
}

numInArray([1,2,3],4)//should return false
numInArray([7,6,3,2],6)//should return true