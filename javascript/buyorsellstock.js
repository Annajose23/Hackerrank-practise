var maxProfit = function(prices) {
    let left = 0;
    let right = left + 1;
    let maxReturn = 0;
   while(left<right && right<prices.length){
       if(prices[left] > prices[right]){
           left = right;
           right++;
       }
       else{
        maxReturn = Math.max(prices[right] - prices[left], maxReturn);
           right++;
       }
   }return maxReturn;
};

console.log(maxProfit([7,6,4,3,1]))