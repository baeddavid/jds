const Hash = require('./Hash');

class HashMap extends Hash {
    constructor() {
        this.hashArr = [];
        this.length = 0;
    }

    put(key, value) {
        let idx = this.hash(key);
        if(this.containsKey(key))
            this.hashArr[idx] = this.hashArr[idx]++;
        else
            this.hashArr[idx] = value;
        return true;
    }

    remove(key) {
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

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length == 0;
    }
}

module.exports = HashMap;