class Node {
    constructor(object, id) {
        this.object = object;
        this.id = id;
        this.leftChild = null;
        this.rightChild = null;
    }

    displayNode() {
        console.log('{' + this.object + '}');
    }
}

module.exports = Node;