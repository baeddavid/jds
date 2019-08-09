const Hash = require('./Hash');
const HashSet = require('./HashSet');

class HashMap extends Hash {
    constructor() {
        super();
        this.hashArr = [];
        this.keyArr = [];
    }

    put(key, value) {
        this.keyArr.push(key);
        let idx = this.hash(key);
        this.hashArr[idx] = value;
        return true;
    }

    get(key) {
        let idx = this.hash(key);
        return this.hashArr[idx];
    }

    remove(key) {
        this.keyArr.forEach((ele, index) => {
            if(ele == key)
                this.keyArr.splice(index, 1);
        });
        let idx = this.hash(key);
        let returnValue = this.hashArr[idx];
        this.hashArr[idx] = null;
        return returnValue;
    }

    containsValue(value) {
        for(let index of this.hashArr)
            if(x == value)
                return true;
        return false;
    }

    containsKey(key) {
        let idx = this.hash(key);
        if(!!this.hashArr[idx])
            return true;
        return false;
    }

    keySet() {
        let keySet = new HashSet();
        for(let key of this.keyArr)
            keySet.add(key);
        return keySet;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length == 0;
    }
}

module.exports = HashMap;