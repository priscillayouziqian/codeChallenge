// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.


//function howManyDalmations(numer :
  //spelling of Dalmatians, not tions
  //spelled number wrong
  //missing right ) after number
  //delete : and add {} for the following codes
  
    //var dogs ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"]; 

    //missing assignment = after dogs
    //spelling of DALMATIONS wrong again, it should be TIANS
    
    //var respond = number <= 10 ? dogs[0] (number <= 50 ? dogs[1] : (number = 101  dogs[3] : dogs[2]

    //missing () for number <= 10
    //missing : after dogs[0]
    //missing ) after number <= 50
    //if number equal to 101, should be ==, not =
    //missing ) after number == 101
    //missing ? before dogs[3]
    
  //return respond
  
  function howManyDalmatians(number){
  
    var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    
    var respond = (number <= 10) ? dogs[0] : (number <= 50) ? dogs[1] : (number == 101) ? dogs[3] : dogs[2]
    
  return respond
  }
 