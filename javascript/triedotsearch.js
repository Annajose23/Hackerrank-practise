
function search(word, curNode = this.trie) {
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (char === '.') {
        const next = word.slice(i + 1)
        return !!Object.keys(curNode)
          .find(key => this.search(next, curNode[key]));
      }
      if (!curNode[char]) return false
      curNode = curNode[char];
    }
    return !!curNode.end
  }