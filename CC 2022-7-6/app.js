// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time){
    //calculate how much water in litres that Nathan needs
    //round the result to the smallest value, using Math.floor()
    return Math.floor(time * 0.5)
}

litres(2) //return 1
litres(1.4) //return 0
litres(12.3) //return 6

//I confused with floor() with ceil(), but here is the differences: 
//Math.ceil(12.9273) returns 13
//Math.floor(12.9273) returns 12
