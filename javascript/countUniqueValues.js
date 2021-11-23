function countUniqueValues(arr){
    let left = 0;
    let right = left + 1;
    if(arr.length === 0){
        return 0
    } else if(arr.length === 1){
        return 1
    } else{
        while(left<right && right<arr.length){
            if(arr[left] === arr[right]){
                right++;
            }else if(arr[left] !== arr[right]){
                arr[left + 1] = arr[right];
                left++;
            }
        }
    }return left+1;
}

console.log(countUniqueValues([1,1,3,3,4,4,4,4,5]));