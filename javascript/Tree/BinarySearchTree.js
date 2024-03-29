class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value)
        
        if(this.root === null){
            this.root = newNode;
            return this;
        }else{
            let current = this.root;
            while(true){
                if(value>current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }
                    else{
                        current = current.right
                    }
                }else if(value<current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }else{
                        current = current.left;
                    }
                }else if(value === current.value){
                    return undefined;
                }
            }
        }
    }
    find(value){
        if(!this.root) return false;
        var current = this.root;
        var found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            }else if(value> current.value){
                current = current.right;
            }else{
                found = true
            }
        }
        if(!found) return false;
        return true
    }
    BFS(){
        let queue = [];
        let data = [];
        let node = this.root;
        queue.push(node);
        while(queue.length){
            let level = [];
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }return data;
    }
}