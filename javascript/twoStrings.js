function twoStrings(s1, s2) {

    var s1Array = s1.split('');
    var s2Array = s2.split('');
     console.log(s1Array, s2Array);
      
      s1Array.forEach((item) => {
        if(s2Array.includes(s1Array[item]) === true)
        return true;
      })
    }
    
    twoStrings("hello", "world");