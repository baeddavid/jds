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
| `set(index, key)`  | changes the key of a link at index |
| `peekFirst()`  | returns the head of the list |
| `peekLast()`  | removes the tail of the list |
| `toArray()`  | returns an array of the list in order |
| `copy()`  | creates a shallow copy of the list |
| `deepCopy()`  | creates a deep copy of the list |

# ADT

ADT stands for Abstract Data Type. ADTs are a data type where the user is not concerned with how it was implemented as long as it works. 

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

## Queue

Queue is implemented via an array

Below are the methods for the `Queue` class.

## Methods

| Method  | Description |
| ------------- | ------------- |
| **Add**  |  |
| `enque(object)`  | Adds an object to the front of the queue. Returns true if operation was successful |
| **Remove**  |  |
| `deque()`  | removes the object at the rear of the queue and returns it |
| **Search**  |  |
| `contains(key)`  | returns a boolean if the queue with key exists|
| **Etc**  |  |
| `peek()`  | Returns the object at the rear of the queue |
| `empty()`  | Returns a boolean if the queue is empty or not|
| `size()`  | Returns the size of the queue |

## Linked Stack

Linked Stack is implemented via a the `LinkedList` class.

Below are the methods for the `LinkedStack` class.

## Methods

| Method  | Description |
| ------------- | ------------- |
| **Add**  |  |
| `push(object)`  | Push an object to the top of the list. Returns true if operation was successful |
| **Remove**  |  |
| `pop()`  | removes the object at the top of the list and returns it |
| **Search**  |  |
| `contains(key)`  | returns a boolean if the stack with key exists|
| **Etc**  |  |
| `peek()`  | Returns the object at the top of the stack |
| `empty()`  | Returns a boolean if the stack is empty or not|
| `size()`  | Returns the size of the stack |

## Linked Queue

Linked Queue is implemented via a the `LinkedList` class.

Below are the methods for the `LinkedQueue` class.

## Methods

| Method  | Description |
| ------------- | ------------- |
| **Add**  |  |
| `enque(object)`  | Adds an object to the front of the queue. Returns true if operation was successful |
| **Remove**  |  |
| `deque()`  | removes the object at the rear of the queue and returns it |
| **Search**  |  |
| `contains(key)`  | returns a boolean if the queue with key exists|
| **Etc**  |  |
| `peek()`  | Returns the object at the rear of the queue |
| `empty()`  | Returns a boolean if the queue is empty or not|
| `size()`  | Returns the size of the queue |

# Hash

Hash data structures are structures that use a hash function. Due to the hash function, amortized time analysis is O(1). 

**NOTE** Please only use primitive values as of version 0.1.1. I need to fix it, but am too lazy right now.

**NOTE 2** I need to refactor the hash function as it both doesn't work with objects and creates hash's that may be too large when enough variables are put in. If you want to contribute check out contribution guidlines. 

## Hash Set

Hash Set is implemented via the `Hash` abstract class.

Below are the methods for the `HashSet` class.

## Methods

| Method  | Description |
| ------------- | ------------- |
| **Add**  |  |
| `add(object)`  | Adds an object to the set. If the set already contains the object, return false. Returns true if operation was successful |
| **Remove**  |  |
| `remove(key)`  | Removes the object with a value of `key` and returns it. |
| **Search**  |  |
| `contains(key)`  | returns a boolean if the set with key exists|
| **Etc**  |  |
| `clear()`  | Empties the set |
| `copy()`  | Creates a shallow copy of the set |
| `deepCopy()`  | Creates a deep copy of the set |
| `isEmpty()`  | Returns a boolean if the set is empty or not|
| `size()`  | Returns the size of the set |

## Hash Map

Hash Map is implemented via the `Hash` abstract class and the `HashSet` class.

Below are the methods for the `HashMap` class.

## Methods

| Method  | Description |
| ------------- | ------------- |
| **Add**  |  |
| `put(key, value)`  | Hashes the key and inserts value into index of the hashed key. Returns true if operation was successful |
| **Remove**  |  |
| `remove(key)`  | Removes the value from index of the hashed `key` and returns it. |
| **Search**  |  |
| `containsKey(key)`  | Returns a boolean if the map with key exists|
| `containsValue(value)`  | Returns a boolean if the map with value exists|
| **Etc**  |  |
| `keySet()`  | Returns an array of keys |
| `copy()`  | Creates and returns a shallow copy of the map |
| `toArray()`  | Returns an array of all the values in map |
| `isEmpty()`  | Returns a boolean if the map is empty or not|
| `size()`  | Returns the size of the map |

