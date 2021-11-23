var lengthOfLIS = function(nums) {
    let left = 0;
    let right = left + 1;
    let maxLen = 0;
    while(left<right && right <nums.length){
        if(nums[right]<nums[left]){
            maxLen = Math.max(right-left, maxLen);
            left = right;
        }
        right++;
    }
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));