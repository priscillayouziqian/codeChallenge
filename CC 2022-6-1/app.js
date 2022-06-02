// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
    //put how many good in a variable
    const count = x.filter(x => x == 'good').length;
    //return if else if else
    return count < 1 ? 'Fail!' : count < 3 ? 'Publish!' : 'I smell a series!';
}


//Example: 
//well(['bad', 'bad', 'bad']) should return 'Fail!'
//well(['good', 'bad', 'bad', 'bad', 'bad']) should return 'Publish!'
//well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']) should return 'I smell a series!