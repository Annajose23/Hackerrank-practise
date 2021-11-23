var maxProduct = function(nums) {
    if(nums.length === 0) return 0;
    let products = [];
    products[0] = nums[0];
    for(let i=1; i<nums.length;i++){
        if(nums[i] > 0){
            products[i] = products[i-1]*nums[i] 
        }else{
            products[i] = 0;
        }
    }
    return Math.max(products);
};

console.log(maxProduct([2,3,-2,4]));