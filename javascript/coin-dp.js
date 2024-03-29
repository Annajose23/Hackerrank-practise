var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0 // base case - to make amount 0 we need 0 coins

    for(let i=1 ;i<= amount; i++) {
        for(let coin of coins) {
            if(i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
         }
    }
    return dp[amount] == Infinity ? -1 : dp[amount]
}

coinChange([1,2,5], 11);