var isSubtree = function(root, subRoot) {
    const isIdentical = (node1, node2) => {
        if (node1 === node2) {
            return true;
        } else if (!node1 || !node2) {
            return false
        } else if (node1.val !== node2.val) {
            return false;
        }
        
        return isIdentical(node1.left, node2.left) && isIdentical(node1.right, node2.right);
    }
    
    let res = false;
    
    const iterator = (node) => {
        if (!node) {
            return false;
        }
        if (node.val === subRoot.val) {
            res = isIdentical(node, subRoot);
        }
        
        if (res) {
            return true;
        }
        
        return iterator(node.left) || iterator(node.right);
    };
    
    iterator(root);
    
    return res;
}