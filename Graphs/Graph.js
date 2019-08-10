const Vertex = require('./Vertex');
const Queue = require('../ADT/queue');
const Stack = require('../ADT/stack');

class Graph {
    constructor(size) {
        this.vertexList = [];
        this.adjMat = [];
        this.subArr = [];
        for(let i = 0; i < size; i++) {
            for(let j = 0; j < size; j++) {
                this.subArr.push(0);
            }
            this.adjMat.push(this.subArr);
            this.subArr = [];
        }
        this.nVerts = 0;
        this.queue = new Queue();
        this.stack = new Stack();
    }

    addVertex(label) {
        this.nVerts++;
        this.vertexList.push(new Vertex(label));
        return true;
    }

    addEdge(start, end) {
        this.adjMat[start][end] = 1;
        this.adjMat[end][start] = 1;
    }

    displayVertex(vertex) {
        console.log(this.vertexList[vertex].label);
    }

    displayVertexMst(vertex) {
        process.stdout.write(this.vertexList[vertex].label);
    }

    getAdjUnvisitedVertex(vertex) {
        for(let i = 0; i < this.nVerts; i++)
            if(this.adjMat[vertex][i] == 1 && this.vertexList[i].wasVisited == false)
                return i;
        return -1;
    }

    bfs() {
        this.vertexList[0].wasVisited = true;
        this.displayVertex(0);
        this.queue.enque(0);
        let v2;

        while(!this.queue.isEmpty()) {
            let v1 = this.queue.deque();
            while((v2 = this.getAdjUnvisitedVertex(v1)) != -1) {
                this.vertexList[v2].wasVisited = true;
                this.displayVertex(v2);
                this.queue.enque(v2);
            }
        }
        for(let i = 0; i < this.nVerts; i++)
            this.vertexList[i].wasVisited = false;
    }

    dfs() {
        this.vertexList[0].wasVisited = true;
        this.displayVertex(0);
        this.stack.push(0);

        while(!this.stack.empty()) {
            let vertex = this.getAdjUnvisitedVertex(this.stack.peek());
            if(vertex == -1)
                this.stack.pop();
            else {
                this.vertexList[vertex].wasVisited = true;
                this.displayVertex(vertex);
                this.stack.push(vertex);
            }
        }

        for(let i = 0; i < this.nVerts; i++)
            this.vertexList[i].wasVisited = false;
    }

    mst() {
        this.vertexList[0].wasVisited = true;
        this.stack.push(0);

        while(!this.stack.empty()) {
            let currentVert = this.stack.peek();
            let vert = this.getAdjUnvisitedVertex(currentVert);
            if(vert == -1)
                this.stack.pop();
            else {
                this.vertexList[vert].wasVisited = true;
                this.stack.push(vert);
                this.displayVertexMst(currentVert);
                this.displayVertexMst(vert);
                console.log();
            }
        }
        for(let i = 0; i < this.nVerts; i++)
            this.vertexList[i].wasVisited = false;
    }
}

module.exports = Graph;