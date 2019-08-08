const { LinkedList } = require('./lists/linkedlist');
const { Queue } = require('./ADT/queue');
const { Stack } = require('./ADT/stack');
const { MaxHeap } = require('./Trees/maxHeap');
const { MinHeap } = require('./Trees/minHeap');

const list = new LinkedList();
console.log(list);
const que = new Queue();
console.log(que)
const stack = new Stack();
console.log(stack);
const max = new MaxHeap();
console.log(max);
const min = new MinHeap();
console.log(min);
