class QueElement {
    constructor(object, prio) {
        this.object = object;
        this.prio = prio;
    }
}

class PriorityQueue{
    constructor() {
        this.queArr = [];
        this.length = 0;
    }

    isEmpty() {
        return this.length == 0;
    }

    insert(object, prio) {
        let queEle = new QueElement(object, prio);
        let present = false;

        for(let i = 0; i < this.queArr.length; i++) {
            if(this.queArr[i].prio > queEle.prio) {
                this.queArr.splice(i, 0, queEle);
                present = true;
                break;
            }
        }
        if(!present)
            this.queArr.push(queEle);
        this.length++;
    }

    deque() {
        if(this.isEmpty())
            throw new Error('Underflow');
        this.length--;
        return this.queArr.shift();
    }

    clear() {
        this.queArr = [];
        return true;
    }

    size() {
        return this.length;
    }

    contains(key) {
        for(let obj of this.queArr)
            if(obj.object == key)
                return true;
        return false;
    }

    toArray() {
        let array = [];
        for(let obj of this.queArr)
            array.push(obj.object);
        return array;
    }

    peek() {
        if(this.isEmpty())
            return 'Empty';
        return this.queArr[0].object;
    }

    back() {
        if(this.isEmpty())
            return 'Empty';
        return this.queArr[this.queArr.length - 1].object;
    }
}

let que = new PriorityQueue();
que.insert('a', 3);
console.log(que);