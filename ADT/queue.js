class Queue {
    constructor() {
        this.queArr = [];
        this.length = 0;
    }

    enque(object) {
        this.queArr.push(object);
        this.length++;
        return true;
    }

    deque() {
        this.length--;
        return this.queArr.shift();
    }

    contains(object) {
        for(let x of this.queArr)
            if(x == object)
                return true;
        return false;
    }

    isEmpty() {
        return this.length == 0;
    }

    peek() {
        if(this.length == 0)
            return false;
        return this.queArr[0];
    }
    
    size() {
        return this.length;
    }
}

module.exports  = Queue;
