function miniMaxSum(arr) {

    var newArray = arr.sort();
    var minSum = newArray[0];
    var maxSum = newArray[arr.length-1];
   
   for( var i=1; i<newArray.length-1; i++){
     minSum += newArray[i];
     maxSum += newArray[i];
   }
   
    console.log(minSum , maxSum);
    
 }
 
 miniMaxSum([1 ,2, 3 ,4 ,5]);