function angryProfessor(k, a) {
    var positiveArr = [];
    var result;
     a.filter(item => {
       if(item > 0){
         positiveArr.push(item);
       }
     })
    console.log(positiveArr);
      
     result = ((a.length - positiveArr.length) < k)? "YES" : "NO";
      console.log(result);
    }
    
    angryProfessor(3,[-1, -3, 4, 2]);