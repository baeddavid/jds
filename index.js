const LinkedList = require('./lists/linkedlist');
const Queue= require('./ADT/queue');
const Stack = require('./ADT/stack');
const MaxHeap = require('./Trees/maxHeap');
const MinHeap = require('./Trees/minHeap');
let max = new MaxHeap();
max.insert(4);
module.exports = {LinkedList, Queue, Stack, MaxHeap, MinHeap};