// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

function index(arr, n){
    return isNaN(arr[n]**n) ? -1 : arr[n]**n
}

//Example:index([2,4,5,6], 2) should return 5**2=25
//index([98,6,33,2,0], 3) should return 2**3=8
//index([100,98,33,22], 5) should return -1, due to there is no index 5 in the array.