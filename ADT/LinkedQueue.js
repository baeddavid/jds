const Stack = require('../lists/linkedlist');

class LinkedQueue {
    constructor() {
        this.length = 0;
        this.queStack = new Stack();
    }

    enque(object) {
        this.length++;
        this.queStack.add(object);
        return true;
    }

    deque() {
        this.length--;
        return this.queStack.removeFirst();
    }

    contains(object) {
        return this.queStack.contains(object);
    }

    peek() {
        return this.queStack.tail;
    }

    size() {
        return this.length;
    }
}

module.exports = LinkedQueue;