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

 //Correct solution: 
 const best = (prices) => {
    // What's the best profit? Default to 0.
    let maxDiff = 0;
    // What's the lowest the stock dropped to? Default to first value.
    let lowSoFar = prices[0];
  
    // Now let's loop through our array of prices starting at 1, because we already stored prices[0] into lowSoFar.
    for (let i = 1; i < prices.length; i++) {
  
      // If the current value in our iteration of prices is less than our current lowSoFar, reassign it. 
      // The maximum profit will require the lowest value in our array of prices at this point.
      if (prices[i] < lowSoFar) {
        lowSoFar = prices[i]
      }
  
      // Subtract them. If the current price value is the same as lowSoFar, this will just be 0 (if no profit, return 0).
      // If they are not the same, this will be a potential profit.
      let diff = prices[i] - lowSoFar
  
      // Is the current profit greater than our stored max profit? If it is, reassign our current max profit.
      if (diff > maxDiff) {
        maxDiff = diff
      }
    }
  
    return maxDiff
  }

  best([15, 10, 20, 22, 1, 9]); //12
 best([5, 4 , 3, 2, 1]); //0
 best([100]); //0
 best([100, 0]) //0