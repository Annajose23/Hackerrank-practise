function plusMinus(arr) {
    var length = arr.length;
     var minus = [];
     var plus = [];
      var zero = [];
     
    arr.map((item) => {
      if(item<0){
        minus.push(item);
      }
      else if(item > 0){
        plus.push(item);
      }else{
        zero.push(item);
      }
    })
    
    console.log((plus.length/length).toPrecision(6));
      console.log((minus.length/length).toPrecision(6));
      console.log((zero.length/length).toPrecision(6));
    
    }