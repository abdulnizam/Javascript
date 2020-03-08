const Graph = require('../graph-traversal');

let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'A');
//
// graph.printGraph();
//
// console.log('-----------');
//
// console.log('BFS');
//
graph.bfs('A');
//
// console.log('DFS');
describe( "Jasmine", () => {
  it("first", () => {
    expect('ABDC').toEqual(graph.bfs_value);
  })
});
