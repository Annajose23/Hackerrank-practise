var isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
    
    let j = s.length - 1;
    let i = 0;
    
    while(i < j){
        if(s[i] !== s[j]){
            return false;
        }
        i++;
        j--;
    }
    
    return true;
};

console.log(isPalindrome("ab_a"));