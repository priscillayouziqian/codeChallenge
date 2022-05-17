// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//Parameters: Is it always going to be intergers? Are we going to be given any special characters? An empty arr ever?
//Return: return a new arry with each value doubled
//Examples: If we are given [2,3,4] should return [4,6,8]
//          If we are given [4,5,6] should return [8,10,12]
//          If we are given [2,22] should return [4,44]
//Psudo Code: 
//Make a fuction that takes in an array

function doubled(arr){
    return arr.map(element=>element*2)
}


//map through the array and multiply each element by two, also return
// [1,2,3].map(1=>1*2) -> 2
//            (2=>2*2) -> 4
//            (3=>3*2) -> 6
//            [2,3,6]
doubled([1,2,3])