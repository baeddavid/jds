/**
 * A Set implemented via a Hash function. It's important to note
 * right now the Hash Set does not take objects due to how Javascript
 * has its object.toString() method set up. I plan on updating it
 * within the next week. 
 * 
 * If you didn't read 
 * TLDR: ONLY USE PRIMITVE VARIABLES
 */


 // Import that Hash abstract class
let Hash = require('./Hash');

// Extends the Hash abstract class 
class HashSet extends Hash {
    constructor() {
        super();
        this.length = 0;
        this.hashArr = [];
    }

    // Adds a hashed primitive value to the array
    add(primitiveValue) {
        let index = this.hash(primitiveValue);
        this.hashArr[index] = primitiveValue;
        this.length++;
        return true;
    }

    // Removes and returns the hashed primitive value
    remove(primitiveValue) {
        let index = this.hash(primitiveValue);
        let returnValue = this.hashArr[index];
        this.hashArr[index] = 0;
        this.length--;
        return returnValue;
    }

    // Checks if the set has a value and returns a boolean
    contains(primitiveValue) {
        let index = this.hash(primitiveValue);
        if(!this.hashArr[index])
            return false;
        return true;
    }

    // Clears the hash set
    clear() {
        this.hashArr = [];
        return true;
    }

    // Creates a shallow copy of the hash set
    copy() {
        let shallowCopy = this;
        return shallowCopy;
    }

    // Creates a deepy copy of the hash set
    deepCopy() {
        let deepCopy = new HashSet();
        for(let i = 0; i < this.hashArr.length; i++)
            deepCopy.add(this.hashArr[i]);
        return deepCopy;
    }

    // Checks if hash set is empty and returns a boolean
    isEmpty() {
        return this.length == 0;
    }

    // Returns the size of the hash set
    size() {
        return this.length;
    }
}

module.exports = HashSet;