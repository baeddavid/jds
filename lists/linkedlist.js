class Link {
    constructor(object) {
        this.object = object;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        return this.head == null;
    }

    size() {
        return this.length;
    }
    
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
    }

    addFirst(object) {
        let newLink = new Link(object);
        if(this.isEmpty())
            this.tail = newLink;
        else
            this.head.prev = newLink;
        newLink.next = this.head;
        this.head = newLink;
        this.length++;
    }

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
    }
    
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

    addAll(collection) {
        for(let x of collection)
            this.addLast(x);
        return true;
    }

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
    // Ready to remove
    getHead() {
        return this.head;
    }
    
    getTail() {
        return this.tail;
    }
    
    search(i) {
        let current = this.head;
        while(current != null) {
            current = current.next;
            if(current.object == i)
                break;
        }
        return current;
    }    

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

    peek() {
        return this.head;
    }

    toArray() {
        let array = [];
        let current = this.head;
        while(current != null) {
            array.push(current.object);
            current = current.next;
        }
        return array;
    }

    

    copy() {
        let shallowList = this;
        return shallowList;
    }

    deepCopy() {
        let copyList = new LinkedList();
        let current = this.head;
        while(current != null) {
            copyList.add(current.object);
            current = current.next;
        }
        return copyList;
    }

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