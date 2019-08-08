class MinHeap {
    constructor() {
        this.heapArr = [];
        this.length = 0;
        this.heapArr[0] = -Infinity;
    }   

    parent(i) {
        return Math.floor(i / 2);
    }

    leftChild(i) {
        return 2 * i;
    }

    rightChild(i) {
        return 2 * i + 1;
    }

    isLeaf(i) {
        if(i >= Math.floor(this.length / 2) && i <= this.length)
            return true;
        return false;
    }

    swap(a, b) {
        let temp = this.heapArr[a];
        this.heapArr[a] = this.heapArr[b];
        this.heapArr[b] = temp;
    }

    minHeapify(i) {
        if(this.isLeaf(i))
            return;
        
            if(this.heapArr[i] > this.heapArr[this.leftChild(i)] || 
            this.heapArr[i] < this.heapArr[this.rightChild(i)]) {
                if(this.heapArr[this.leftChild(i)] > this.heapArr[this.rightChild(i)]) {
                    this.swap(i, this.leftChild(i));
                    this.maxHeapify(this.leftChild(i));
                } else {
                    this.swap(i, this.rightChild(i));
                    this.minHeapify(this.rightChild(i));
                }
            }
    }

    insert(object) {
        this.heapArr[++this.length] = object;
        let current = this.length;
        while(this.heapArr[current] < this.heapArr[this.parent(current)]) {
            this.swap(current, this.parent(current));
            current = this.parent(current);
        }
    }

    extractMin() {
        let popped = this.heapArr[1];
        this.heapArr[1] = this.heapArr[this.length--];
        this.minHeapify(1);
        return popped;
    }

    buildHeap(collection) {
        for(let i of collection)
            this.insert(i);
    }
}

module.exports  = { MinHeap };