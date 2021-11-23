function lengthOfLongestSubstring(s) {
    let sMap = new Map();
    let head = 0;
    let longest = 0;
    for(let i=0; i<s.length; i++){
        if(sMap.get(s[i]) !== undefined){
            const k = sMap.get(s[i]);
            for(let j=head; j<=k; j++){
                sMap.delete(s[j])
                head++;
            }
        }
        sMap.set(s[i],i);
        longest = Math.max(longest, sMap.size);
    }return longest;
};

console.log(lengthOfLongestSubstring("dvdf"));