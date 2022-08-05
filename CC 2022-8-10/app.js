// Start by creating a function called decoder that has a single parameter called code.

// Each code will be a sequence of numbers and letters, always starting with a number and ending with a letter(s).

// Each number tells you how many characters to skip before finding a good letter. After each good letter should come the next next number.

// For example, the string ‘hey’ could be encoded to ‘0h2xce5ngbrdy’. This means ‘skip 0, find the ‘h’, skip 2, find the ‘e’, skip 5, find the ‘y’.

// So, if we passed ‘0h2xce5ngbrdy’ into your function, we should get ‘hey’ as a result.

// Here are a few more examples:

// '0h2xce5ngbrdy' => 'hey'
// '3vdfn' => 'n'
// '0r' => 'r'
// '2bna0p1mp2osl0e' => 'apple'
// '0y4akjfe0s' => 'yes'

function decoder(code){
    const wordNoNum = "";
    for(let i=0; i<code.length; i++){
        if(typeof Number(code[i]) !== NaN){
            code.splice(i, code[i]) //I get stuck, if I splice it out, the length of current string will be different, then for loop cannot loop through.

            //To solve this concern, I start to consider using .map()
        }
    }
    return wordNoNum;
}

// Provided Solution
const decoder = code => {
    // Divide up the string so we have each element at a unique index.
    let splitStr = code.split('')
    // The string we will return, initialize to an empty string.
    let result = ''
  
    for (let i = 0; i < splitStr.length; i++) {
      // Check to see if the current number is not NOT a number (aka is a number).
      typeof +splitStr[i] === "number"; // Return true
      typeof NaN === "number"; // Returns true
      if (!Number.isNaN(+splitStr[i])) {
        // If it is, add that number to our increment. That's how many we need to skip.
        i += +splitStr[i]
      } else {
        // If it's not a number (aka a string), add it to the result.
        result += splitStr[i]
      }
    }
  
    return result
  }
  
  // Playing with NaN
  console.log(isNaN("Hello"))
  console.log(Number("hello"));
  console.log(Number.isNaN(+"NaN"))
  console.log(typeof NaN);