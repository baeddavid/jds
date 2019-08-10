const isLeaf = Symbol('isLeaf');
const swap = Symbol('swap');
const maxHeapify = Symbol('maxHeapify');
const parent = Symbol('parent');

class MaxHeap {
    constructor() {
        this.heapArr = [];
        this.length = 0;
        this.heapArr[0] = Infinity;
    }   

    [parent](i) {
        return Math.floor(i / 2);
    }

    [isLeaf](i) {
        if(i > Math.floor(this.length / 2) && i <= this.length)
            return true;
        return false;
    }

    [swap](a, b) {
        let temp = this.heapArr[a];
        this.heapArr[a] = this.heapArr[b];
        this.heapArr[b] = temp;
    }

    [maxHeapify](i) {
        let leftChild =  2 * i;
        let rightChild = 2 * i + 1;
        
        if(this[isLeaf](i))
            return;
        
            if(this.heapArr[i] < this.heapArr[leftChild] || 
            this.heapArr[i] < this.heapArr[rightChild]) {
                if(this.heapArr[leftChild] > this.heapArr[rightChild]) {
                    this[swap](i, leftChild);
                    this[maxHeapify](leftChild);
                } else {
                    this[swap](i, rightChild);
                    this[maxHeapify](rightChild);
                }
            }
    }

    insert(object) {
        this.heapArr[++this.length] = object;
        let current = this.length;
        while(this.heapArr[current] > this.heapArr[this[parent](current)]) {
            this[swap](current, this[parent](current));
            current = this[parent](current);
        }
    }

    extractMax() {
        let popped = this.heapArr[1];
        this.heapArr[1] = this.heapArr[this.length--];
        this[maxHeapify](1);
        return popped;
    }

    buildHeap(collection) {
        for(let i of collection)
            this.insert(i);
    }

    isEmpty() {
        return this.length == 0;
    }
}

module.exports  = MaxHeap;