// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage){
    return health-damage>=0 ? health-damage : 0
}

combat(100,5) //return 5
combat(92, 8) //return 84
combat(20, 30) //return 0