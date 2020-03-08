// bfs
// it travel from top to bottom and visit from the top node
// dfs
// it also travel from top to bottom but visit from the bottom node

// lets create the sample nodes to test

class Graph {
  constructor() {
    this.adjList = new Map();
    this.bfs_value = '';
    this.dfs_value = '';
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  printGraph() {
    let keys = this.adjList.keys();
    for(let k of keys) {
      console.log(k+'-->'+String(this.adjList.get(k)));
    }
  }

  bfs(v) {
    let q = [];
    q.push(v);
    let visited = [];
    let keys = this.adjList.keys();
    for(let k of keys) {
      visited[k] = false;
    }

    while(q.length > 0) {
      let elem = q.shift();
      visited[elem] = true;
      console.log(elem);
      this.bfs_value += elem;

      let eList = this.adjList.get(elem);
      for(let e in eList) {
        let el = eList[e];
        if(!visited[el]){
          visited[el] = true;
          q.push(el);
        }
      }
    }
  }

  dfs(v) {
    let visited = [];
    let keys = this.adjList.keys();
    for(let k of keys) {
      visited[k] = false;
    }

    this.dRecur(v, visited);
  }

  dRecur(v, visited) {
    let elem = this.adjList.get(v);
    visited[v] = true;
    this.dfs_value += v;
    console.log(v);
    for(let e in elem) {
      let el = elem[e];
      if(!visited[el]) {
        visited[el] = true;
        this.dRecur(el, visited);
      }
    }
  }

}

module.exports = Graph;
let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'A');

graph.printGraph();

console.log('-----------');

console.log('BFS');

graph.bfs('A');

console.log('DFS');

graph.dfs('B');
