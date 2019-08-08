

// Constructor/class for link object
class Link {
    constructor(object) {
        this.object = object;
        // next pointer default is null
        this.next = null;
        // prev pointer default is null
        this.prev = null;
    }
}

/**
 * Creates an empty doubly-linked list. A linked list is a data structure that does not
 * stores its data in contiguous blocks of memory. It uses pointers/references to connect
 * to the next "link". 
 * 
 * A doubly linked list is where each node has a reference to the previous node allowing
 * for forward and backward traversal
 * 
 * General Info:
 * Insertion Front/Back: O(1)
 * Deletion Front/Back: O(1)
 * Deletion(Key): O(N)
 * Adding Collection: O(S) where S is the size of the collection to be added
 * Adding a Collection At an Index: O(S + N)
 * Get at Index: O(N)
 * Copy(Shallow): O(1)
 * Copy(Deep): O(n)
 */

class LinkedList {
    constructor() {
        // Head is null in an empty list
        this.head = null;
        // Tail is null in an empty list
        this.tail = null;
        // Length is 0 in an empty list
        this.length = 0;
    }

    // Returns a boolean if the list is empty or not
    isEmpty() {
        return this.head == null;
    }

    // Returns the size of the list
    size() {
        return this.length;
    }
    
    // Adds an object to the end of the list
    // Returns true if the object is added successfully
    add(object) {
        let newLink = new Link(object);
        if(this.isEmpty()) 
            this.head = newLink;
        else {
            this.tail.next = newLink;
            newLink.prev = this.tail;
        }
        this.tail = newLink;
        this.length++;
        return true;
    }

    // Adds an object to the front of the list
    // Returns true if the object is added successfully
    addFirst(object) {
        let newLink = new Link(object);
        if(this.isEmpty())
            this.tail = newLink;
        else
            this.head.prev = newLink;
        newLink.next = this.head;
        this.head = newLink;
        this.length++;
        return true;
    }

    // Adds an object to the end of the list
    // Returns true if the object is added successfully
    addLast(object) {
        let newLink = new Link(object);
        if(this.isEmpty()) 
            this.head = newLink;
        else {
            this.tail.next = newLink;
            newLink.prev = this.tail;
        }
        this.tail = newLink;
        this.length++;
        return true;
    }
    
    // Adds an object at a specific index
    // Returns true if the object is added successfully
    addAtIndex(index, object) {
        let newLink = new Link(object);
        if(this.isEmpty()) {
            this.head = newLink;
            this.tail = newLink;
            this.length++;
            return true;
        }
        let current = this.head;
        let i = i;
        while(i < index && current != null) {
            current = current.next;
            i++;
            if(!current)
                return false;
        }
        newLink.next = current;
        current.prev.next = newLink;
        newLink.prev = current.prev;
        current.prev = newLink;
        this.length++;
        return true;
    }

    // Appends an array of items to the end of the list
    // Returns true if the object is added successfully
    addAll(collection) {
        for(let x of collection)
            this.addLast(x);
        return true;
    }

    // Appends an array of items to a specific index
    // Returns true if the object is added successfully
    addAllAtIndex(index, collection) {
        let tempList = new LinkedList();
        tempList.addAll(collection);
        
        let current = this.head;
        let last = this.tail;
        let i = 1;
        let tempNext;
        
        while(i < index && current != null) {
            current = current.next;
            i++;
            if(!current)
                return false;
        }
        tempNext = current.next;
        tempList.tail.next = tempNext;
        
        current.next = tempList.head;
        tempList.head.prev = current;
        tempNext.prev = tempList.tail;
        this.length +=  collection.length;
        return true;
    }

    // Removes the first object
    removeFirst() {
        let deleted = this.head;
        if(this.head.next == null)
            this.tail = null;
        else
            this.head.next.prev = null;
        this.head = this.head.next;
        this.length--;
        return deleted;
    }

    // Removes the last object
    removeLast() {
        let deleted = this.tail;
        if(this.head.next == null)
            this.head = null;
        else
            this.tail.prev.next = null;
        this.tail = this.tail.prev;
        this.length--;
        return deleted;
    }

    // Gets the link at specified index
    get(index) {
        let current = this.head;
        let i = 0;
        while(i < index && current != null) {
            current = current.next;
            if(current == null)
                return false;
            i++;
        }
        return current;
    }

    // Searches for a link and returns it
    search(i) {
        let current = this.head;
        while(current != null) {
            current = current.next;
            if(current.object == i)
                break;
        }
        return current;
    }    

    // Returns a boolean if the specified key is present in the list
    contains(key) {
        let current = this.head;
        while(current.object != key && current != null) {
            current = current.next;
            if(!current)
                return false;
        }
        return true;
    }

    // Removes a link at a specific index
    removeAtIndex(index) {
        let i  = 0;
        let current = this.head;

        while(i < index) {
            current = current.next;
            i++;
        }

        if(current == this.head)
            this.head = this.head.next;
        else
            current.prev.next = current.next;
        
        if(current == this.tail)
            this.tail = current.prev;
        else
            current.next.prev = current.prev;
        this.length--;
        return current;
    }    

    // Removes a link with a specific object key
    removeKey(key) {
        let current = this.head;
        while(current.object != key) {
            current = current.next;
            if(!current)
                return false;
        }
        if(current == this.head)
            this.head = this.head.next;
        else
            current.prev.next = current.next;
    
        if(current == this.tail)
            this.tail = current.prev;
        else
            current.next.prev = current.prev;
        this.length--;
        return current;
    }

    // Removes the first occurence of the key
    removeFirstOccurence(key) {
        let current = this.head;
        while(current.object != key) {
            current = current.next;
            if(!current)
                return false;
        }
        if(current == this.head)
            this.head = this.head.next;
        else
            current.prev.next = current.next;
    
        if(current == this.tail)
            this.tail = current.prev;
        else
            current.next.prev = current.prev;
        this.length--;
        return current;
    }

    // Returns the head of the list
    peek() {
        return this.head;
    }

    // Returns an array with all the contents of the list in order 
    toArray() {
        let array = [];
        let current = this.head;
        while(current != null) {
            array.push(current.object);
            current = current.next;
        }
        return array;
    }

    // Creates a shallow copy of the list
    copy() {
        let shallowList = this;
        return shallowList;
    }

    // Creates a deep copy of the list.
    deepCopy() {
        let copyList = new LinkedList();
        let current = this.head;
        while(current != null) {
            copyList.add(current.object);
            current = current.next;
        }
        return copyList;
    }
    /* Testing functions. Will be removed */
    printForward() {
        let current = this.head;
        while(current != null) {
            console.log(current.object);
            current = current.next;
        }
    }

    printBackward() {
        let current = this.tail;
        while(current != null) {
            console.log(current.object);
            current = current.prev;
        }
    }
}

module.exports  = { LinkedList };