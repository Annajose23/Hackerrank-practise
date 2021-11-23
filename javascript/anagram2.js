function validAnagram(s1,s2){
    // add whatever parameters you deem necessary - good luck!
    if(s1.length !== s2.length){
        return false;
    }
    let s1Array = [...s1];
    let s2Array = [...s2];
    let s1Counter={};
    let s2Counter={};
    for(let val of s1Array){
        s1Counter[val] = (s1Counter[val] || 0) + 1;
    }
    for(let val of s2Array){
        s2Counter[val] = (s2Counter[val] || 0) + 1;
    }
    console.log(s1Counter);
    console.log(s2Counter);

    for(let key in s1Counter){
        if(!(key in s2Counter)){
            return false;
        }
        if(s2Counter[key] !== s1Counter[key]){
            return false;
        }
    }return true
    
  }
  
  console.log(validAnagram('annna','nmana'));