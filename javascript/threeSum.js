var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if(nums[i] > 0){
        break;
    }
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] > 0) {
        right--;
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        if(left<right && nums[left] === nums[left+1]){
            left++;
        }
        if(left<right && nums[right] === nums[right-1]){
            right--;
        }
        left++;
        right--;
      }
    }
  } return res;
};

console.log(threeSum([-2,0,0,2,2]));
