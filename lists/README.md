## Linked List Documentation

The linked list is implemeted with a doubly linked list. 

Below are the methods for the `LinkedList` class.

## Methods

### Add
| Method  | Description |
| ------------- | ------------- |
| `add(object)`  | adds an object to the end of the list. Returns true if operation was successful |
| `addFirst(object)`  | adds an object to the front of the list. Returns true if operation was successful |
| `addLast(object)`  | adds an object to the end of the list. Returns true if operation was successful |
| `addAtIndex(index, object)` | adds an object at index. Returns true if operation was successful |
| `addAll(collection)` | appends a collection to the end of the list preserving the order. Returns true if operation was successful |
| `addAllAtIndex(index, collection)` | appends a collection at index preserving the order  |

### Remove
| Method  | Description |
| `removeFirst()`  | removes the first link and returns it |
| `removeLast()`  | removes the last link and returns in  |
| `removeAtIndex()`  | removes the link at index and returns it |
| `removeKey(key)`  | removes the link with key and returns it  |
| `removeFirstOccurence(key)`  | removes the first occurence of key and returns it  |
| `removeLastOccurence(key)`  | removes the last occurence of key and returns it  |

### Search
| Method(test)  | Description |
| `get(index)`  | returns the link at index  |
| `search(key)`  | returns the link that contains key  |
| `contains(key)`  | returns a boolean if a link with key exists |
| `indexOf(key)`  | returns the index of the first occurence of key |
| `lastIndexOf(key)`  | returns the index of the last occurence of key |

### Extra
| Method  | Description |
| `set(index, key)`  | changes the key of a link at link |
| `peekFirst()`  | returns the head of the list |
| `peekLast()`  | removes the tail of the list |
| `toArray()`  | returns an array of the list in order |
| `copy()`  | creates a shallow copy of the list |
| `deepCopy()`  | creates a deep copy of the list |