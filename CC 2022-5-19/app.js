// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//Parameter: are you ever given an empty array or undefined? what them? are you always given digits?
//Return: whatever number was given, it is now split up into an array and the order of the numbers is reversed.
//Example: if we were given 934 => ['4', '3', '9']
//                          234 => ['4', '3', '2']
//                          undefined => not a number
//P:make a function that takes in a number
function reverseArray(num){
    let numArray = num.toString().split('').reverse()
    //reverse array, turn array intergers again and return
    return numArray.map(e=>parseInt(e))

}

reverseArray(934)//should return [4,3,9]
