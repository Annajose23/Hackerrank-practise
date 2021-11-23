var reverseBits = function(n) {
    const num = n.toString(2).split("").reverse();
    return parseInt(num,2);
};

reverseBits(00000010100101000001111010011100)