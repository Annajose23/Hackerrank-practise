var containsDuplicate = function(nums) {
    let numsObj = {};
   for(let val of nums){
       numsObj[val] = (numsObj[val] || 0) + 1;
       if(numsObj[val] > 1){
           return true;
       }
   }return false
};

containsDuplicate([1,2,3,4])