//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//try not use else/if statement for the challenge.

function even_or_odd(number){
    return (number % 2 == 0) ? 'Even' : 'Odd'
}

even_or_odd(2)
even_or_odd(399)
even_or_odd(31)

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let sum = 0
    for (i=0; i< arr.length; i++){
      if (arr[i] > 0){
        sum = sum + arr[i]
      }
    }
    return sum
  }

  positiveSum([1,2,3,4,5]) //15
  positiveSum([1,-2,3,4,5]) //13
  positiveSum([]) //0