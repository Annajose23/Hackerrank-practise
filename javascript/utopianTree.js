function utopianTree(n) {
    var height = 1;
    var cycle = 1;
    while(cycle <= n){
      if(cycle % 2 === 0){
        height += 1;
      } else{
        height *= 2;
      }
      cycle++;
    }
      console.log(height);
    }
    
    utopianTree(5);