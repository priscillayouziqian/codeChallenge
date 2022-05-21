// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x){
    if (typeof x !== "String"){
        //check if x isn't a string, then calculate the value
        return x * 50 + 6
    }else{
        //if it is a string (else), return string 'Error'
        return 'Error'
    }
}

//Examples:
problem('hello') //return Error
problem('anything word') //return Error
problem(1) //return 56
problem(2) //return 106
problem(10) //return 506