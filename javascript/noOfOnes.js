var hammingWeight = function(n) {
    const nums = n.toString();
    const noOfOnes = [...nums].filter(num => num === 1)
    console.log(noOfOnes);
  };

  console.log(hammingWeight(00000000000000000000000000001011));