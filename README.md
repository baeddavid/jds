# JDS
![Version](https://img.shields.io/badge/Version-1.0.4-Brightgreen)

JDS(Java Data Structures) is an in development Javascript data structures library. It takes popular Java data structures and implements them in Javascript for convenient use. They come with standard Java methods.

## What is JDS for

Although JDS can be used for personal project development, I highly reccomend waiting for future updates before doing so. I hastily made most of the data structures in 3 days so they may have varying bugs. 

JDS was made so that I could practice algorithms and data structures conveniently on my personal machine without downloading multiple NPM packages or copying code from somewhere.

## Installation

Just throw this into the working repository in your terminal and you're all set

`npm install jds.js`

## Contributing

If you find a bug and went through the source code and know how to help, absolutely submit a pull request! There aren't any specific guidelines for contributing, I just ask that you describe in detail what your pull request is fixing/improving.

If you have a data strucutre you'd like to see implemeted feel free to shoot me an email at baeddavid@gmail.com and I'll see what I can do.

## Data Structures

| Type  | Data Structure |
| ------------- | ------------- | 
| ADT  | Stack  |
| ADT  | Queue  |
| ADT  | Priority Queue  |
| ADT  | Linked Stack  |
| ADT  | Linked Queue  |
| Tree | Max Heap  |
| Tree | Min Heap  |
| Tree | Binary Search Tree  |
| Hash  | Hash Map  |
| Hash  | Hash Set  |
| Pointer  | Linked List  |
| Pointer  | Singly Linked List  |
| Pointer  | Graph  |

## Potential Strucutures to be implemented
 * TreeSet
 * 2-3-4 Tree
 * B-Trees
 * Red-Black Tree
 * LinkedMap
 * HashTree
 * Weighted Graph

# Documentation

# Lists

## Linked List

The linked list is implemeted with a doubly linked list. 

Below are the methods for the `LinkedList` class.

You can create a linked list by calling
`new jds.LinkedList()`
assuming you gave the package import a name of `jds`.

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

## Singly Linked List

The linked list is implemeted with a singly linked list. 

Below are the methods for the `sLinkedList` class.

You can create a linked list by calling
`new jds.sLinkedList()`
assuming you gave the package import a name of `jds`.

| Method  | Description |
| ------------- | ------------- |
| **Add**  |  |
| `add(object)`  | Adds an object to the head of the list |
| **Remove**  |  |
| `removeFirst()`  | Removes an object at the head of the list |
| `removeKey(key)`  | Removes an object with key in the list |
| **Search**  |  |
| `get(index)`  | Returns the link at index  |
| `search(key)`  | Returns the link with key |
| `contains(key)`  | Returns a boolean if list contains key |
| **Etc**  |  |
| `set(index, key)`  | Changes the key of a link at index |
| `peekFirst()`  | Returns the head of the list |
| `toArray()`  | Returns an array of the list in order |
| `copy()`  | Creates a shallow copy of the list |
| `deepCopy()`  | Creates a deep copy of the list |
| `isEmpty()`  | Returns a boolean if the list is empty or not |
| `size()`  | Returns the size of the list |

# ADT

ADT stands for Abstract Data Type. ADTs are a data type where the user is not concerned with how it was implemented as long as it works. 

## Stack

Stack is implemented via an array

Below are the methods for the `Stack` class.

You can create a stack by calling
`new jds.Stack()`
assuming you gave the package import a name of `jds`.
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

You can create a queue by calling
`new jds.Queue()`
assuming you gave the package import a name of `jds`.
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

Priority Queue is implemented via an array.

Below are the methods for the `Priority Queue` class.

You can create a priority queue by calling
`new jds.PriorityQueue()`
assuming you gave the package import a name of `jds`.
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

You can create a linked stack by calling
`new jds.LinkedStack()`
assuming you gave the package import a name of `jds`.
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

You can create a linked queue by calling
`new jds.LinkedQueue()`
assuming you gave the package import a name of `jds`.
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

Hash data structures are structures that use a hash function. Due to the hash function, amortized time analysis for most methods is O(1). 

**NOTE** Hash now works with objects. It may have a few bugs, so please submit an issue if it isn't working correctly.

## Hash Set

Hash Set is implemented via the `Hash` abstract class.

Below are the methods for the `HashSet` class.

You can create a hash set by calling
`new jds.HashSet()`
assuming you gave the package import a name of `jds`.
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

You can create a hash map by calling
`new jds.HashMap()`
assuming you gave the package import a name of `jds`.
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

# Trees

Trees are generally pointer based data structures that hold references to 'children' nodes. JDS 1.0 comes with 3 trees: 2 array based and 1 pointer based.

## Max Heap

Max Heap is implemented via an array.

You can create a max heap by calling
`new jds.MaxHeap()`
assuming you gave the package import a name of `jds`.
## Methods

| Method  | Description |
| ------------- | ------------- |
| **Add**  |  |
| `insert(object)`  | Inserts an object into the heap, adjusting the heap to maintain heap properties
| **Remove**  |  |
| `extractMax()`  | Removes and returns the root of the heap and heapifies the heap to maintain heap properties |
| **Etc**  |  |
| `buildHeap()`  | Converts an array into heap organization. Does not create a new heap object |
| `isEmpty()`  | Returns a boolean if the heap is empty or not |

## Min Heap

Min Heap is implemented via an array.

You can create a min heap by calling
`new jds.MinHeap()`
assuming you gave the package import a name of `jds`.
## Methods

| Method  | Description |
| ------------- | ------------- |
| **Add**  |  |
| `insert(object)`  | Inserts an object into the heap, adjusting the heap to maintain heap properties
| **Remove**  |  |
| `extractMin()`  | Removes and returns the root of the heap and heapifies the heap to maintain heap properties |
| **Etc**  |  |
| `buildHeap()`  | Converts an array into heap organization. Does not create a new heap object |
| `isEmpty()`  | Returns a boolean if the heap is empty or not |

## Binary Search Tree (bst)

Binary Search Tree is implemented via the `Node` class.

**Note** bst is an unbalanced tree which degenerates performance wise in specific conditions 

You can create a bst by calling
`new jds.bst()`
assuming you gave the package import a name of `jds`.
## Methods

| Method  | Description |
| ------------- | ------------- |
| **Add**  |  |
| `insert(object, id)`  | Inserts an object into the tree, and sorts it into the appropriate position via `id`.
| **Remove**  |  |
| `remove(id)`  | Removes and returns the the node with id of `id` |
| **Search**  |  |
| `search(key)`  | Searches the tree for a node with id of `key`. If it doesn't exist, it returns null |
| **Etc**  |  |
| `preOrder(node)`  | Performs a pre-order traversal of the tree starting at `node`|
| `inOrder(node)`  | Performs an in-order traversal of the tree starting at `node`|
| `postOrder(node)`  | Performs a post-order traversal of the tree starting at `node`|
| `minValue(node)`  | Returns the node with the minimum `id` for `node`'s subtree|
| `maxValue(node)`  | Returns the node with the maximum `id` for `node`'s subtree|

# Graphs

Graphs are also an ADT. However due to the complex nature of graphs, they are in a separate section.

Graphs are a non-linear data structure consisting of nodes and edges.

## Graph

Graph is implemented via an array and the `Vertex` class.

Below are the methods for the `Graph ` class.

You can create a graph by calling
`new jds.Graph()`
assuming you gave the package import a name of `jds`.
## Methods

| Method  | Description |
| ------------- | ------------- |
| **Add**  |  |
| `addVertex(label)`  | Creates a vertex and returns true if operation was successful |
| `addEdge(start, end)`  | Creates an edge between two nodes. |
| **Remove**  |  |
| `removeVertex(key)`  | Removes the vertex with a label of key and returns true if opeartion was successful |
| `removeEdge(start, key)`  | Removes an edge between two vertices |
| **Etc**  |  |
| `displayVertex()`  | Prints the vertex to the console |
| `displayVertexMst()`  | Prints the vertices on the same line to the console |
| `getAdjUnvisitedVertex(vertex)`  | Returns the closest vertex to `vertex`that is unvisited |
| `bfs()`  | Performs a breadth first search on the graph|
| `dfs()`  | Performs a depth first search on the graph |
| `mst()`  | Prints a minimum spanning tree |