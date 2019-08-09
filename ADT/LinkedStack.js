const LinkedList = require('../lists/linkedlist');

class LinkedStack {
    constructor() {
        this.length = 0;
        this.stackList = new LinkedList();
    }

    push(object) {
        this.stackList.addFirst(object);
        this.length++;
        return true;
    }

    pop() {
        this.length--;
        return this.stackList.removeFirst();
    }

    peek() {
        return this.stackList.head;
    }

    empty() {
        return this.length == 0;
    }

    search(object) {
        this.stackList.contains(object);
    }
}

module.exports = LinkedStack;