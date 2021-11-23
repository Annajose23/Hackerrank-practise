let countBits = function(num) {
    let dp = new Array(num+1);
    
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;
    
    if (num < 3) {
        return dp.slice(0, num+1);
    }
    
    let c = 2;
    
    for (let i = 3; i <= num; i++) {
        if (i == c*2) {
            c = c*2;
            dp[i] = 1;
        } else {
            dp[i] = dp[c] + dp[i-c];
        }
    }
    
    return dp;
};

console.log(countBits(5))