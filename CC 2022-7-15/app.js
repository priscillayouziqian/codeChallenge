// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)
// should return:

// 'A'

function getChar(c){
    return String.fromCharCode(c)
    //googling "ascii format in string js", there is String.fromCharCode()
}

getChar(55) //7
getChar(56) //8
getChar(57) //9