// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

function sayHello(name){
    return `Hello, ${name}` //using ``template to put name parameter in the greetings. Remember to pay attention to the tiny details, like ,
}

// Example output:

sayHello('Mr. Spock') // Hello, Mr. Spock
sayHello("Captain Kirk") // Hello, Captain Kirk
sayHello("Dr. McCoy") //Hello, Dr. McCoy

// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

function tripleTrouble(one, two, three){
    let str = '' //declare a variable to store the strings
    //empty varialbe needs to create outside of for loop, or it won't be regconize when return at the end
    for (i=0; i<one.length; i++){
        str += one[i]+two[i]+three[i]
    }
    return str
}

tripleTrouble('aaa', 'bbb', 'ccc') //abcabcabc
tripleTrouble("aaaaaa","bbbbbb","cccccc") //abcabcabcabcabcabc
tripleTrouble("burn", "reds", "roll") //brrueordlnsl