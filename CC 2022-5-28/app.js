// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

// P: Will I ever be given a string without a diacritic? Or an empty string? Or anything other an a string? What to do about special characters?
//R: return a string that has no diacritics
//E:

console.log(unPolished('Jędrzej Błądziński'), "Jedrzej Bladzinski") 
console.log(unPolished('Rufio is the BAEST', 'Rufio is the BAEST'))


//P: make a function that takes in a string
function unPolished(str){
    //chop that string into individual character
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let polishVowels = {'ą':'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',}
    //go thru array, a diacritical?
    str.split('').map(e=>e == polishVowels[e] ? e = vowels[e-1] : e)
    //if yes, turn it to undiacritical.

    //if not, just return.

    //smack that all together and teturn
}
//this doesn't work, not even returning it. 