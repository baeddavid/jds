class Hash {
    constructor() { } 

    hash(key) {
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
}

module.exports = Hash;