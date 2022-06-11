//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a,b){
    let array = [] //create an empty array to store numbers
    for (i=a; i<=b; i++){
        //for loop through intergers between a and b
        array.push(i) //push each numbers to the empty array
    }
  return array //when the loop done, return the whole array with stored intergers
}
