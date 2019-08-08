class Stack {
    constructor() {
        this.stackArr = [];
        this.top = -1;
        this.length = 0;
    }

    push(object) {
        this.stackArr.push(object);
        this.top++;
        this.length++;
        return true;
    }

    pop() {
        this.top--;
        this.length--;
        return this.stackArr.pop();
    }

    peek() {
        return this.stackArr[this.top];
    }

    empty() {
        return top == -1;
    }

    search(object) {
        for(let i = top; i >= 0; i--)
            if(this.stackArr[i] == object)
                return true;
        return false;
    }

    size() {
        return this.length;
    }
}