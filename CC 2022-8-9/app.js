//This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

// The best function will be given an array of stock prices in the order they happened throughout the day.

// It should return the maximum possible profit on the stock for that day.

// For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:

// best([15, 10, 20, 22, 1, 9])
// 12
//My solution: it didn't work for second text which should return 0.
function best(arr){
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);
   
    if(arr[0] < maxNum || arr[1]<maxNum || arr[2]<maxNum){
      return maxNum - minNum;
    }else if(arr[0] = maxNum){
      return 0;
    }
    
 }
 
 best([15, 10, 20, 22, 1, 9]);
 best([5, 4 , 3, 2, 1]); //should return 0
 best([100]);
 best([100, 0])