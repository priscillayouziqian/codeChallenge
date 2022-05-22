// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//Parameter: no arrays will be empty. Doesn't matter if they are special character or not since they may be removed, etc. If we change the array, will it mess up indices? Nah? nah probs

//Return: return an array with every other elment starting with no.1. That means that it will be all odd numbers. 

//Example: if geven [1,3,'fish','fishsticks',3] => [1,'fish',3]
//         if geven [9,9,99,999,3] => [9,99,3]
//         if geven ['tulip','rose', 'rosemary','waterlily', 'bamboo'] => ['tulip','rosemary','bamboo']

//p: make a function that takes in an array
function everyOther(arr){
    let newArr = []
    //make a for loop where I can grab index number
    for(i=0;i<=arr.length;i++){
        if(i % 2 === 0){ 
            newArr.push(arr[i])
        }
    }
    //if index number is even, pop it off
    //also what do we do about 0 => it is even apparently #scam
    //return new array
    return newArr
}

everyOther([1,3,'fish','fishsticks',3]) //[1,'fish',3]
everyOther([9,9,99,999,3]) //[9,99,3]
everyOther(['tulip','rose', 'rosemary','waterlily', 'bamboo']) //['tulip','rosemary','bamboo']