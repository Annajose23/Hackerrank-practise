var productExceptSelf = function(nums) {
    let current = 0;
     let productArr = [];
     let product = nums.reduce((a,b) => a*b);
     while(current<nums.length){
    if(nums[current] === 0){
        productArr.push(product);
    }else{
        productArr.push(Math.abs(product/nums[current]));
    }
     current++;
     }
     return productArr;
 };

 console.log(productExceptSelf([-1,1,0,-3,3]))