// var wordBreak = function(s, wordDict) {
    
//     let table = new Array(s.length + 1).fill(false);
    
//     table[0] = true;
    
//     for(let i = 0; i <= s.length; i++){
//         if(table[i] === true){
// 			for(let word of wordDict){
// 				if(s.slice(i, i + word.length) === word){
// 					table[i + word.length] = true;
// 				}
// 			}
// 		}
//     }
//     return table[s.length];
// };

var wordBreak = function(s, wordDict) {
    let i = 0;
        for(let word of wordDict){
            if(s.slice(i,word.length+i)===word){
                i = i+word.length;
                if(i === s.length) break;
            }else{
                return false
            }
        }
        
    return true
};

console.log(wordBreak("applepenapple", ["apple","pen"]))