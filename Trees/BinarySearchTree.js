const Node = require('./Node');
const helper = Symbol('helper');
const getSucc = Symbol('getSucc');

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
        if(this.root == null)  {
            this.root = newNode;
            this.size++;
            return true;
        }
        else {
            let current = this.root;
            let parent;
            while(true) {
                parent = current;
                if(id < current.id) {
                    current = current.leftChild;
                    if(current == null) {
                        parent.leftChild = newNode;
                        this.size++;
                        return true;
                    }
                } else {
                    current = current.rightChild;
                    if(current == null) {
                        parent.rightChild = newNode;
                        this.size++;
                        return true;
                    }
                }
            }
        }
    }

    remove(id) {
        let current = this.root;
        let parent = this.root;
        let isLeftChild = true;

        while(current.id != id) {
            parent = current;
            if(id < current.id) {
                isLeftChild = true;
                current = current.leftChild;
            } else {
                isLeftChild = false;
                current = current.rightChild;
            }
            if(current == null)
                return false;
            
            if(current.leftChild == null && current.rightChild == null) {
                if(current == this.root)
                    this.root = null;
                else if(isLeftChild)
                    parent.leftChild = null;
                else
                    parent.rightChild = null;
            }

            else if(current.rightChild == null) {
                if(current == this.root)
                    this.root = current.leftChild;
                else if(isLeftChild)
                    parent.leftChild = current.leftChild;
                else
                    parent.rightChild = current.leftChild;
            }

            else if(current.leftChild == null) {
                if(current == this.root)
                    this.root = current.rightChild;
                else if(isLeftChild)
                    parent.leftChild = current.rightChild;
                else
                    parent.rightChild = current.rightChild;
            }

             else {
                let succ = this[getSucc](current);
                if(current == root)
                    this.root = succ;
                else if(isLeftChild)
                    parent.leftChild = succ;
                else
                    parent.rightChild = succ;
                succ.leftChild = current.leftChild;
             }
             return true;
        }
    }

    [getSucc](node) {
        let succParent = node;
        let succ = node;
        let current = node.rightChild;

        while(current != null) {
            succParent = succ;
            succ = current;
            current = current.leftChild;
        }

        if(succ != node.rightChild) {
            succParent.leftChild = succ.rightChild;
            succ.rightChild = node.rightChild;
        }
        return succ;
    }

    preOrder(node) {
        if(node != null) {
            console.log(node.object + ' ' + node.id);
            this.preOrder(node.leftChild);
            this.preOrder(node.rightChild);
        }
    }

    inOrder(node) {
        if(node != null) {
            this.preOrder(node.leftChild);
            console.log(node.object + ' ' + node.id);
            this.preOrder(node.rightChild);
        }
    }

    postOrder(node) {
        if(node != null) {
            this.preOrder(node.leftChild);
            this.preOrder(node.rightChild);
            console.log(node.object + ' ' + node.id);
        }
    }

    minValue(node) {
        let current = node;
        while(current.leftChild != null)
            current = current.leftChild;
        return current;
    }

    maxValue(node) {
        let current = node;
        while(current.rightChild != null)
            current = current.rightChild;
        return current;
    }
}

module.exports = BinarySearchTree;