class Graph:
    def __init__(self):
        self.adjList = {}

    def addVertex(self, v):
        self.adjList[v] = []

    def addEdge(self, v, w):
        self.adjList[v].append(w)
        self.adjList[w].append(v)

    def printGraph(self):
        for x in self.adjList:
            print(x+'=>')
            print(self.adjList[x])


    def bfs(self, v):
        q = [v]
        visited = {}
        for x in self.adjList:
            visited[x] = False

        while len(q) > 0:
            elem = q.pop(0)
            visited[elem] = True
            print(elem)
            els = self.adjList[elem]
            for el in els:
                if visited[el] == False:
                    visited[el] = True
                    q.append(el)

    def dfs(self, v):
        visited = {}
        for x in self.adjList:
            visited[x] = False

        self.recursive(v, visited)

    def recursive(self, v, visited):
        visited[v] = True;
        print(v)
        elem = self.adjList[v]
        for el in elem:
            if visited[el] == False:
                visited[el] = True
                self.recursive(el, visited)


if __name__ == '__main__':
    graph = Graph()
    graph.addVertex('A')
    graph.addVertex('B')
    graph.addVertex('C')
    graph.addVertex('D')

    graph.addEdge('A', 'B')
    graph.addEdge('B', 'C')
    graph.addEdge('C', 'D')
    graph.addEdge('D', 'A')

    # graph.printGraph()
    # graph.bfs('A')
    graph.dfs('B')
