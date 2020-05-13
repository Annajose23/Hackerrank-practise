function anagram(s) {

    if(s.length%2 !== 0){ return -1; }
      let sub = s.substring(0, s.length * 0.5).split(``);
  
      for(let i = sub.length; i < s.length; i++){
          let id = sub.indexOf(s.charAt(i));
          
          if(id !== -1){
              sub.splice(id,1);
          }
      }
      return sub.length;
  }