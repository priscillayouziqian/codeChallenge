// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. 

function noBoringZeros(n) {
    while(n%10==0 && n!==0){
      n = n/10
    }
    return n
  }
//Syntax for while loop:
// while (condition) {
// code block to be executed
//   }

  noBoringZeros(1540)
  noBoringZeros(960000)
  noBoringZeros(1050)