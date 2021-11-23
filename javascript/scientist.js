function main(n, quantity, ingredientPresent ){
    var count = 0; 
     for(var i = 0; i < n ; i++){
         if(ingredientPresent.includes(0) === "false"){
             ingredientPresent[i] = ingredientPresent[i] - quantity[i];
         }
     }
    
    }
    
    main(4, [2,5,6,3], [20,40,90,50]);