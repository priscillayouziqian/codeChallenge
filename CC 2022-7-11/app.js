// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    return name[0].toUpperCase()+'.'+name.split(" ")[1][0].toUpperCase()
    //name[0] is to get the first letter of the full name
    //name.split(" ") is to get the full name in to two array and last name is the array[1]
    //name.split(" ")[1][0] can get the last name's first letter
    //make the letters uppercase, using .toUpperCase()
 }

 abbrevName("Sam Harris") //'S.H'
 abbrevName("Patrick Feenan") //'P.F'
 abbrevName("Evan Cole") //'E.C'