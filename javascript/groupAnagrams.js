var groupAnagrams = function(strs) {
    const hash = {}
    
    for(let i = 0; i < strs.length; i++) {
        let sorted = strs[i].split('').sort().join('');
        if(!hash[sorted]) {
            hash[sorted] = [strs[i]]
        } else {
            hash[sorted].push(strs[i])
        }
       
    }
    
    return Object.values(hash)
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));