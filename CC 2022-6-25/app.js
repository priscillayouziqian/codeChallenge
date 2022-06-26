//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    return x.split(' ').join('')
    //first, split the string to array. be careful there is space between ' '
    //then, join the array to string without space(the challenge said so), be careful there is no space in ''
}

noSpace('8j8 mbili8g jl b') //'8j8mbili8gjlb'
noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd') //'88Bifk8hB8BB8BBBB888chl8BhBfd'
noSpace('8aaaaa dddd r     ') //'8aaaaaddddr'

