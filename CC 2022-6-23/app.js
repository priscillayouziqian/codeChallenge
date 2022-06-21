// create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    return str.slice(1, -1)
    //apply prototype slice(beginIndex, endIndex), begins from str[1] because removed the first character; end with str[-1] because remove the last character.
}

removeChar('eloquent') //'loquen'
removeChar('hello') //'ell'
removeChar('ending') //'ndin'