const LinkedList = require('../lists/linkedlist');

class HashMap {
    constructor() {
        this.hashList = new LinkedList();
        this.length = 0;
    }

    

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length == 0;
    }
}