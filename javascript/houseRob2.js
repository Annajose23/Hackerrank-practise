var rob = function(nums) {
    
    function helper(numbers){
        let rob1 = 0;
    let rob2 = 0;
    let temp;
    for(let n of nums){
        temp = Math.max(rob1 + n, rob2);
        rob1 = rob2
        rob2 = temp
    }return rob2
    }
    
   let arg1 = nums.shift();
    let arg2 = nums.pop();
    return Math.max(arg1, arg2)
};

console.log(rob([2,3,2]))