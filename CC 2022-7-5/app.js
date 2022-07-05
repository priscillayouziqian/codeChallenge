// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

function capitalizedWord(word){
    //make the first letter capital: .charAt(index#) means first letter, .toUpperCase() to make it capital
    var firstLetterCapital = word.charAt(0).toUpperCase()

    //make the rest letters in the string stay lowercase: .slice(starting index#) returns a portion of an array 
    var restLowerCase = word.slice(1)

    //combine them together and return
    return firstLetterCapital+restLowerCase
}