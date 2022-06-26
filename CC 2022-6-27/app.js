// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
    let vowels = ['a','e','i','o','u','A','E','I','O','U'] //put all vowels in array named vowels.
    return s.split('').map(item =>vowels.includes(item) ? '!' : item).join('')
    //first, split the sentence s into an array, using split('')
    //then, check if the new array if includes vowels in the array vowels, using map(), if yes, replace by !, if no, return the same item.
    //last, after replacing all vowels, join the array into a string.
}

replace("Hi!") //'H!!'
replace("!Hi! Hi!") //"!H!! H!!"
replace("ABCDE") //"!BCD!"