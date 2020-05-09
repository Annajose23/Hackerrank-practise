function dayOfProgrammer(year) {
  
    var result;
     var date;
      
    if(year<=1917){
    date = (year % 4 === 0) ? "12" : "13";
    result = date + '.' + "09" + '.' + year;
    }
      
    else if(year>=1919){
      date =   ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0))? "12":"13";
      result = date + '.' + "09" + '.' + year;
    } 
      else result = "26.09.1918";
      return result;
    }
    
    console.log(dayOfProgrammer(2016));1