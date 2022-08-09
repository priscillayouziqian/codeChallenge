// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

function century(year){
    return Math.ceil(year/100)
    //Math.ceil() rounds a number up to the nearest integer
}

century(1705) //--> 18
century(1900) //--> 19
century(1601) //--> 17
century(2000) //--> 20

class Dog {
    constructor(name, color){
        this.name = name;
        this.color = color;
      }
  
      bark(){
        console.log('Arf! I am', this.name, 'the dog!');
      }
  }
  
  class Puppy extends Dog {
    constructor(name, color, trainingLevel) {
      super(name, color)
  
      this.trainingLevel = trainingLevel
    }
  
    levelUp(num) {
      this.trainingLevel += num
    }
  }

  Puppy.bark();