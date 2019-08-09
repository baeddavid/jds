const Stack = require('../lists/linkedlist');

class Queue {
    constructor() {
        this.length == 0;
        this.queStack = new Stack();
    }

    enque(object) {
        this.length++;
        this.queStack.addFirst(object);
        return true;
    }

    deque() {
        this.length--;
        return this.queStack.removeLast();
    }

    peek() {
        return this.queStack.tail;
    }

    size() {
        return this.length;
    }
}