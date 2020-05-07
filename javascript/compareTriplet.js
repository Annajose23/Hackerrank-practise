function compareTriplets(a, b) {
  
    var aCount = 0;
    var bCount = 0;
    var count = [];
      
    a.map((item, index) => {
      if(item != b[index]){
      if(item > b[index]){
        aCount++;
      }else{
        bCount++;
      }
      }
    })
    count.push(aCount);
    count.push(bCount);
    return count;
    }
    
    compareTriplets([17, 28, 30],[99, 16, 8]);