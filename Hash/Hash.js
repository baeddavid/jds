/**
 * Credit to https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
 * and https://stackoverflow.com/questions/194846/is-there-any-kind-of-hash-code-function-in-javascript
 * for helping to provide hashing and object hashing function
 */

const isObj = Symbol('isObj');

class Hash {
    constructor() { } 

    hash(key, length) {
        key = this.hash2(key, length);
        return key *= 31 % 11;
    }

    hash2(key, length) {
        if(this[isObj](key))
            key = JSON.stringify(key)
        else
            key = key.toString();
        let charCode = 0;
        let hash = 0;
        for(let i = 0; i < key.length; i++)
            charCode += key.charCodeAt(i);
        hash = (charCode * 1031) % (length + 1200);
        return hash;
    }

    [isObj](obj) {
        let type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
      }
}

module.exports = Hash;