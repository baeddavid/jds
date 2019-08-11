const Hash = require('./Hash');
// const HashSet = require('./HashSet');

class HashMap extends Hash {
    constructor() {
        // super();
        this.mapArr = [];
        this.keyArr = [];
        this.size = 0;
    }

    put(key, value) {
        this.keyArr.push(key);
        let idx = this.hash(key, this.size);
        this.mapArr[idx] = value;
        this.size++;
        return true;
    }

    get(key) {
        let idx = this.hash(key, this.size);
        return this.mapArr[idx];
    }

    remove(key) {
        this.keyArr.forEach((ele, index) => {
            if(ele == key)
                this.keyArr.splice(index, 1);
        });
        this.size--;
        let idx = this.hash(key);
        let returnValue = this.mapArr[idx];
        this.mapArr[idx] = null;
        return returnValue;
    }

    containsValue(value) {
        for(let index of this.mapArr)
            if(x == value)
                return true;
        return false;
    }

    containsKey(key) {
        let idx = this.hash(key, this.size);
        if(!!this.mapArr[idx])
            return true;
        return false;
    }

    // keySet() {
    //     let keySet = new HashSet();
    //     for(let key of this.keyArr)
    //         keySet.add(key);
    //     return keySet;
    // }

    toArray() {
        let array = [];
        for(let key of this.keyArr)
            array.push(this.get(key));
        return array;
    }

    copy() {
        let shallow = this;
        return shallow;
    }

    size() {
        return this.size;
    }

    isEmpty() {
        return this.size == 0;
    }
}

module.exports = HashMap;