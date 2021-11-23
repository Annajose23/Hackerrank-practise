function buildTree(preorder, inorder) {
    if (!inorder.length) return null;
    const root = preorder.shift();
    const pivot = inorder.indexOf(root);
    const node = new TreeNode(root);
    node.left = buildTree(preorder, inorder.slice(0,pivot));
    node.right = buildTree(preorder, inorder.slice(pivot+1));
    return node;
  };