const Node = require('./Node');
const helper = Symbol('helper');

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    [helper](node, key) {
        if(node == null || node.id == key)
            return node;
        if(node.id > key)
            return this[helper](node.leftChild, key);
        else
            return this[helper](node.rightChild, key);
    }

    search(key) {
        return this[helper](this.root, key);
    }

    insert(object, id) {
        let newNode = new Node(object, id);
        if(this.root == null) 
            this.root = newNode;
        else {
            let current = this.root;
            let parent;
            while(true) {
                parent = current;
                if(id < current.id) {
                    current = current.leftChild;
                    if(current == null) {
                        parent.leftChild = newNode;
                        return;
                    }
                } else {
                    current = current.rightChild;
                    if(current == null) {
                        parent.rightChild = newNode;
                        return;
                    }
                }
            }
        }
    }
}

let tree = new BinarySearchTree();
tree.insert('a', 4);
tree.insert('b', 2);
tree.insert('c', 18);
tree.insert('d', 21);
tree.insert('e', 17);
console.log(tree.search(21));