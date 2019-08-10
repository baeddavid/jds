# JDS (in-development)

JDS(Java Data Structures) is an in development Javascript data structures library. It takes popular Java data structures and implements them in Javascript for convenient use. They come with standard Java methods.

## Data Structures to be implemented

| Type  | Data Structure | Implemented|
| ------------- | ------------- | ------------- |
| ADT  | Stack  | ✓ |
| ADT  | Queue  | ✓ |
| ADT  | Priority Queue  | ✓ |
| ADT  | Linked Stack  | ✓ |
| ADT  | Linked Queue  | ✓ |
| Tree | Max Heap  | ✓ |
| Tree | Min Heap  | ✓ |
| Tree | Red-Black Tree  | In-progress |
| Hash  | Hash Map  | ✓ |
| Hash  | Hash Set  | ✓ | 
| Pointer  | Linked List  | ✓ |
| Pointer  | Graph  | ✓ |
| Pointer  | Weighted Graph  | In-progress (most likely last) |


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
| `add(object)`  | Adds an object to the end of the list. Returns true if operation was successful |
| `addFirst(object)`  | Adds an object to the front of the list. Returns true if operation was successful |
| `addLast(object)`  | Adds an object to the end of the list. Returns true if operation was successful |
| `addAtIndex(index, object)` | Adds an object at index. Returns true if operation was successful |
| `addAll(collection)` | Appends a collection to the end of the list preserving the order. Returns true if operation was successful |
| `addAllAtIndex(index, collection)` | Appends a collection at index preserving the order  |
| **Remove**  |  |
| `removeFirst()`  | Removes the first link and returns it |
| `removeLast()`  | Removes the last link and returns in  |
| `removeAtIndex()`  | Removes the link at index and returns it |
| `removeKey(key)`  | Removes the link with key and returns it  |
| `removeFirstOccurence(key)`  | Removes the first occurence of key and returns it  |
| `removeLastOccurence(key)`  | Removes the last occurence of key and returns it  |
| **Search**  |  |
| `get(index)`  | Returns the link at index  |
| `search(key)`  | Returns the link that contains key  |
| `contains(key)`  | Returns a boolean if a link with key exists |
| `indexOf(key)`  | Returns the index of the first occurence of key|
| `lastIndexOf(key)`  | Returns the index of the last occurence of key |
| **Etc**  |  |
| `set(index, key)`  | Changes the key of a link at index |
| `peekFirst()`  | Returns the head of the list |
| `peekLast()`  | Removes the tail of the list |
| `toArray()`  | Returns an array of the list in order |
| `copy()`  | Creates a shallow copy of the list |
| `deepCopy()`  | Creates a deep copy of the list |

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
| `pop()`  | Removes the object at the top of stack and returns it |
| **Search**  |  |
| `contains(key)`  | Returns a boolean if the stack with key exists|
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
| `enque(object)`  | Adds an object to the rear of the queue. Returns true if operation was successful |
| **Remove**  |  |
| `deque()`  | Removes the object at the front of the queue and returns it |
| **Search**  |  |
| `contains(key)`  | Returns a boolean if the queue with key exists|
| **Etc**  |  |
| `peek()`  | Returns the object at the rear of the queue |
| `empty()`  | Returns a boolean if the queue is empty or not|
| `size()`  | Returns the size of the queue |

## Priority Queue

Linked Queue is implemented via an array.

Below are the methods for the `Priority Queue` class.

## Methods

| Method  | Description |
| ------------- | ------------- |
| **Add**  |  |
| `insert(object, prio)`  | Adds an object to the appropriate position queue. Returns true if operation was successful |
| **Remove**  |  |
| `deque()`  | Removes the object at the front of the queue and returns it |
| **Search**  |  |
| `contains(key)`  | Returns a boolean if the object with key exists|
| **Etc**  |  |
| `setPrio(key, newPrio)`  | Change the priority of an object with value of key |
| `peek()`  | Returns the object at the front of the queue |
| `back()`  | Returns the object at the rear of the queue |
| `empty()`  | Returns a boolean if the queue is empty or not|
| `clear()`  | Empties the queue and returns true if operation was successful |
| `size()`  | Returns the size of the queue |
| `toArray()`  | Returns an array of the objects in order |

## Linked Stack

Linked Stack is implemented via a the `LinkedList` class.

Below are the methods for the `LinkedStack` class.

## Methods

| Method  | Description |
| ------------- | ------------- |
| **Add**  |  |
| `push(object)`  | Push an object to the top of the list. Returns true if operation was successful |
| **Remove**  |  |
| `pop()`  | Removes the object at the top of the list and returns it |
| **Search**  |  |
| `contains(key)`  | Returns a boolean if the stack with key exists|
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
| `enque(object)`  | Adds an object to the rear of the queue. Returns true if operation was successful |
| **Remove**  |  |
| `deque()`  | Removes the object at the front of the queue and returns it |
| **Search**  |  |
| `contains(key)`  | Returns a boolean if the queue with key exists|
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
| `contains(key)`  | Returns a boolean if the set with key exists|
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

# Graphs

Graphs are also an ADT. However due to the complex nature of graphs, they are in a separate section.

Graphs are a non-linear data strucutre consisting of nodes and edges.

## Graph

Graph is implemented via an array and the `Vertex` class.

Below are the methods for the `Graph ` class.

## Methods

| Method  | Description |
| ------------- | ------------- |
| **Add**  |  |
| `addVertex(label)`  | Creates a vertex and returns true if operation was successful |
| `addEdge(start, end)`  | Creates an edge between two nodes. |
| **Etc**  |  |
| `displayVertex()`  | Prints the vertex to the console |
| `displayVertexMst()`  | Prints the vertices on the same line to the console |
| `getAdjUnvisitedVertex(vertex)`  | Returns the closest vertex to `vertex`that is unvisited |
| `bfs()`  | Performs a breadth first search on the graph|
| `dfs()`  | Performs a depth first search on the graph |
| `mst()`  | Prints a minimum spanning tree |