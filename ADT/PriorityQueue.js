const MaxHeap = require('../Trees/maxHeap');

class PriorityQueue extends MaxHeap{
    constructor() {
        super();
        this.queHeap = new MaxHeap();
    }

    insert(object, prio) {
        let queEle = {object: prio}
        this.queHeap.insert(queEle); 
    }
}

let que = new PriorityQueue();
que.insert('a', 3);
console.log(que);