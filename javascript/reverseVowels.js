var reverseVowels = function(s) {
    s = s.split("");
    let left=0;
    let right = s.length-1;
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    while(left<right){
        if(!vowels.has(s[left])){
            left++;
        }
        if(!vowels.has(s[right])){
            right--;
        }
        if(vowels.has(s[left]) && vowels.has(s[right])){
            [s[left],s[right]] = [s[right], s[left]];
            left++;
            right--;
        }
    }return result.join('');
};

console.log(reverseVowels("hello"));