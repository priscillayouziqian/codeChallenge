// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

let humanYearsCatYearsDogYears = function(humanYears){
    //the array list [humanYear, CatYear, DongYear], for the first year.
     if (humanYears == 1) return [1, 15, 15]
     //for the second year, cats and dogs both 15+9=24.
     if (humanYears == 2) return [2, (15+9), (15+9)]
     //after the 2 years, cat/dog year = 24 + equevilent years
     return [humanYears, (humanYears-2) * 4 + (15+9), (humanYears-2) * 5 + (15+9)]
     
}

console.log(humanYearsCatYearsDogYears(1)) //should return [1,15,15]
console.log(humanYearsCatYearsDogYears(2)) //should return [2, 24, 24]
console.log(humanYearsCatYearsDogYears(3)) //should return [3, 28, 29]