function diagonalDifference(arr) {
    var diagonal1 = 0, diagonal2 = 0;
   var result;
   
       for (var row = 0; row < arr.length; row++) {
           diagonal1 += arr[row][row];
           diagonal2 += arr[row][arr.length - row - 1];
       }
      if(diagonal1>diagonal2) 
      result = diagonal1 - diagonal2;
      else
      result = diagonal2 - diagonal1;
   
      return result;
   }