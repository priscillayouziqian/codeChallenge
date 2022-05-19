/*

Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

Example
For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be

seatsInTheater(nCols, nRows, col, row) === 96


[output] an integer
The number of people who sit strictly behind you and in your column or to the left.*/

function seatsInTheater(nCols, nRows, col, row){
    //let's say the value we need to get is the area of rectangle.
    //nCols - col + 1 is the length, and nRows - row is the width.
    //rectangle area = length * width
    return (nCols - col + 1) * (nRows - row)
}

//Examples:
seatsInTheater(16,11,5,3) //96

seatsInTheater(1,1,1,1) //0

seatsInTheater(13,6,8,3) //18