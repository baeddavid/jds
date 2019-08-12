/**
 * Credit to https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
 * and https://stackoverflow.com/questions/194846/is-there-any-kind-of-hash-code-function-in-javascript
 * for helping to provide hashing and object hashing function
 */

const isObj = Symbol('isObj');

class Hash {
    constructor() { } 

     hash(key) {
        if(this[isObj](key))
            key = JSON.stringify(key)
        else
            key = key.toString();
        let hash = 0;
        if (key.length == 0) {
            return hash;
        }
        for (let i = 0; i < key.length; i++) {
            let char = key.charCodeAt(i);
            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash);
    }

    [isObj](obj) {
        let type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
      }
}

module.exports = Hash;