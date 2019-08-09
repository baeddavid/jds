# JDS (in-development)

JDS(Java Data Structures) is an in development Javascript data structures library. It takes popular Java data structures and implements them in Javascript for convenient use. They come with standard Java methods.

## Data Structures to be implemented

| Type  | Data Structure | Implemented|
| ------------- | ------------- | ------------- |
| ADT  | Stack  | ✓ |
| ADT  | Queue  | ✓ |
| ADT  | Priority Queue  |
| ADT  | Linked Stack  | ✓ |
| ADT  | Linked Queue  | ✓ |
| Tree | Max Heap  | ✓ |
| Tree | Min Heap  | ✓ |
| Tree | Red-Black Tree  |
| Hash  | Hash Map  | In-progress |
| Hash  | Hash Set  | ✓ | 
| Pointer  | Linked List  | ✓ |
| Pointer  | Graph  |
| Pointer  | Weighted Graph  |


## Potential Strucutures to be implemented
 * TreeSet
 * 2-3-4 Tree
 * B-Trees
 * LinkedMap
 * HashTree
 

## Release Data
 * Currently a side project so it will be released in about 4-6  weeks at the current rate. Will be released when the main structures are implemented. This is not a hard release date, as testing and other things may bog me down.


## Documentation

## Linked List

The linked list is implemeted with a doubly linked list. 

Below are the methods for the `LinkedList` class.

## Methods

| Method  | Description |
| ------------- | ------------- |
| **Add**  |  |
| `add(object)`  | adds an object to the end of the list. Returns true if operation was successful |
| `addFirst(object)`  | adds an object to the front of the list. Returns true if operation was successful |
| `addLast(object)`  | adds an object to the end of the list. Returns true if operation was successful |
| `addAtIndex(index, object)` | adds an object at index. Returns true if operation was successful |
| `addAll(collection)` | appends a collection to the end of the list preserving the order. Returns true if operation was successful |
| `addAllAtIndex(index, collection)` | appends a collection at index preserving the order  |
| **Remove**  |  |
| `removeFirst()`  | removes the first link and returns it |
| `removeLast()`  | removes the last link and returns in  |
| `removeAtIndex()`  | removes the link at index and returns it |
| `removeKey(key)`  | removes the link with key and returns it  |
| `removeFirstOccurence(key)`  | removes the first occurence of key and returns it  |
| `removeLastOccurence(key)`  | removes the last occurence of key and returns it  |
| **Search**  |  |
| `get(index)`  | returns the link at index  |
| `search(key)`  | returns the link that contains key  |
| `contains(key)`  | returns a boolean if a link with key exists |
| `indexOf(key)`  | returns the index of the first occurence of key|
| `lastIndexOf(key)`  | returns the index of the last occurence of key |
| **Etc**  |  |
| `set(index, key)`  | changes the key of a link at link |
| `peekFirst()`  | returns the head of the list |
| `peekLast()`  | removes the tail of the list |
| `toArray()`  | returns an array of the list in order |
| `copy()`  | creates a shallow copy of the list |
| `deepCopy()`  | creates a deep copy of the list |

## Stack

Stack is implemented via an array

Below are the methods for the `Stack` class.

## Methods

| Method  | Description |
| ------------- | ------------- |
| **Add**  |  |
| `add(object)`  | Pushes an object to the top of the stack. Returns true if operation was successful |
| **Remove**  |  |
| `pop()`  | removes the object at the top of stack and returns it |
| **Search**  |  |
| `contains(key)`  | returns a boolean if the stack with key exists|
| **Etc**  |  |
| `peek()`  | Returns the object at the top of the stack |
| `empty()`  | Returns a boolean if the stack is empty or not|
| `size()`  | Returns the size of the stack |