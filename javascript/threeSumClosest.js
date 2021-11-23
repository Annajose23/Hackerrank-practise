var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b);
    let left,right, sum;
    let closestSum = nums[nums.length-1];
    for(let i= 0; i< nums.length-2; i++){
        left = i+1;
        right = nums.length-1;
        while(left<right){
        sum = nums[i] + nums[left] + nums[right];
        closestSum = Math.min(Math.abs(target-sum), closestSum);
            left++;
            right--;
        }
        // -4, -1, 1,2
        // -4 + -1 + 2
        
    }return closestSum;
};

threeSumClosest([-1,2,1,-4],1)