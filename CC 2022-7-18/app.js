// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"

function remove (string) {
    if(string[string.length-1] == '!'){
      return string.slice(0,-1) 
      //.slice(starts, ends), not includes the ends. Ex:slice(0, 4) means element index 0, 1, 2 and 3. 
      //index -1 means the last element, -2 means last second element. 
    }else{
      return string
    }
  }

  