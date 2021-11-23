var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    var sub = "";
    var max = 0;
    var longestSubstring = "";
    for (var i = 0; i < s.length; i++) {
        var l = s[i];
        var match = sub.indexOf(l);
        if (match >= 0) {
            max = Math.max(max, sub.length);
            sub = sub.substring(match + 1) + l;
        } else {
            sub += l;
            max = Math.max(max, sub.length);
            longestSubstring = sub;
        }
    }
    return max;
};

console.log(lengthOfLongestSubstring("nndNfdfdf"));