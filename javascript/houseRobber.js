var rob = function(nums) {
    let rob1 = 0;
    let rob2 = 0;
    let temp;
    for(let n of nums){
        temp = Math.max(rob1 + n, rob2);
        rob1 = rob2
        rob2 = temp
    }return rob2
};

console.log(rob([2,7,9,3,1]));