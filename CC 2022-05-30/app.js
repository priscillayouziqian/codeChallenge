// If/else syntax debug
// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

// The function receives one parameter health which will always be a whole number between -10 and 10.

//debug from:
// function checkAlive (health){
//     if (){
//         health <=0
//         return false
//     } else (){
//         return true
//     }
// }

//P:we need to get back 'true' or 'false', we don't need if/else statement and tell them to return true or false, it by default

function checkAlive (health){
    return !(health <= 0) 
    //check return if health<=0 a false statement, if yes, then !(health<=0) is true statement.
}

//Example:
checkAlive(5) //should return true
checkAlive(0) //should return false
checkAlive(-10) //should return false