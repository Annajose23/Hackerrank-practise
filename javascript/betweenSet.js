function getTotalX(a, b) {
    var count;
     
     for(var i = 0; i <= 100; i++ ){
       if(a.every(item => i % item == 0)){
         if(b.every(item => item % i == 0)){
           count++;
         }
       }
     }
     return count;
   }
   
   getTotalX([2 ,4],[16 ,32, 96]);
   