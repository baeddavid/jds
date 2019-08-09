/**
 * A Set implemented via a Hash function. It's important to note
 * right now the Hash Set does not take objects due to how Javascript
 * has its object.toString() method set up. I plan on updating it
 * within the next week. 
 * 
 * If you didn't read 
 * TLDR: ONLY USE PRIMITVE VARIABLES
 */


let Hash = require('./Hash');

class HashSet extends Hash {
    constructor() {
        super();
        this.length = 0;
        this.hashArr = [];
    }

    add(primitiveValue) {
        let index = this.hash(primitiveValue);
        this.hashArr[index] = primitiveValue;
        return true;
    }

    remove(primitiveValue) {
        let index = this.hash(primitiveValue);
        let returnValue = this.hashArr[index];
        this.hashArr[index] = 0;
        return returnValue;
    }

    contains(primitiveValue) {
        let index = this.hash(primitiveValue);
        if(!this.hashArr[index])
            return false;
        return true;
    }

    clear() {
        this.hashArr = [];
        return true;
    }

    copy() {
        let shallowCopy = this;
        return shallowCopy;
    }

    deepCopy() {
        let deepCopy = new HashSet();
        for(let i = 0; i < this.hashArr.length; i++)
            deepCopy.add(this.hashArr[i]);
        return deepCopy;
    }

    isEmpty() {
        return this.length == 0;
    }

    size() {
        return this.length;
    }
}

module.exports = HashSet;