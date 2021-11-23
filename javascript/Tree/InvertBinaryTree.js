function InvertBinaryTree(tree){
    let data = [];
    function Invert(node){
        data.push(node.value);
        if(node.left && node.right) {
            data.push(node.right)
            data.push(node.left)
        }
    }
    Invert(this,root)
}

console.log(InvertBinaryTree([4,2,7,1,3,6,9]));