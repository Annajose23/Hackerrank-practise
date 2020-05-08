function birthdayCakeCandles(ar) {
    var largest = 0;
    var count = 1;
    
      ar.forEach((item,index)=>{
        if(item > largest){
          largest = item;
        }else if(largest === item){
         count++; 
        }
        
      })
      console.log(count);
    }
    
    birthdayCakeCandles([3, 2, 1, 3]);