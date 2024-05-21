// =========================== Graphs ===========================

// some problems in graphs are to find adjacent nodes or check if nodes are connected.

// 3 ways of representing it in JS
//  ==== Ist way of representing graph: Vertice list and edge list ====
// const vertices = ['A', 'B', 'C', 'D', 'E']
// const edges = [
//   ['A', 'B'],
//   ['A', 'D'],
//   ['B', 'C'],
//   ['C', 'D'],
//   ['C', 'E'],
//   ['D', 'E'],
// ]

// export const getAdjacentNodes = (node, edges) => {
//   const adjacentNodes = [];

//   for(let edge of edges) {
//     // ['A', 'B']
//     const nodeIndx = edge.indexOf(node);
//     if(nodeIndx > -1) {
//       const adjacentNode = nodeIndx === 1 ? edge[0] : edge[1];
//       adjacentNodes.push(adjacentNode);
//     }
//   }

//   return adjacentNodes;
// }

// console.log(getAdjacentNodes('C', edges));

// ====== Second way of representing graph: Adjacency matrix ===
// const vertices = ['A', 'B', 'C', 'D', 'E']
// const adjacencyMatrix = [
//   ['0', '1', '0', '1', '0'], // each row represents a node. This is A. 1 shows a connection
//   ['1', '0', '1', '0', '0'], // B
//   ['0', '1', '0', '1', '1'], // C
//   ['1', '0', '1', '0', '1'], // D
//   ['0', '0', '1', '1', '0'] // E
// ]

// const edgeIndex = {
//   'A': 0,
//   'B': 1,
//   'C': 2,
//   'D': 3,
//   'E': 4
// }

// const adjacencyList = (node, adjacencyMatrix) => {
//   const adjenctNodes = [];
//   const nodeVertex = edgeIndex[node]; // get the corresponding row. E.g for 'A', it returns 0.

//   for (let i = 0; i < vertices.length; i++) {
//     if(adjacencyMatrix[nodeVertex][i] === '1') {
//       adjenctNodes.push(vertices[i])
//     }
//   }

//   return adjenctNodes;
// }

// const isConnected = (node1, node2) => {
//   const node1Vertex = edgeIndex[node1];
//   const node2Vertex = edgeIndex[node2];

//   return adjacencyMatrix[node1Vertex][node2Vertex] === '1';

// }

// // console.log(adjacencyList('A', adjacencyMatrix));

// console.log(isConnected('A', 'E'));

// ==== Third way of representing graph: Adjacency list (A more efficient way) ====
// const adjacencyList = {
//   'A': ['B', 'D'], // shows node as key and connected nodes as values
//   'B': ['A', 'C'],
//   'C': ['B', 'D', 'E'],
//   'D': ['A', 'C', 'E'],
//   'E': ['C', 'D']
// };

// const getAdjacentNodes = (node, adjacencyList) => {
//   return adjacencyList[node];
// };

// ================ Breadth First Search (BFS) ========================
// transverse broad by visiting all neigbor nodes before children.
// uses queue data structure

// const graph = {
//   a: ['b', 'c'],
//   b: ['d'],
//   c: ['e'],
//   d: ['f'],
//   f: [],
//   e: []
// }

// const breadthFirstTraversal = (graph, start) => {
//   const queue = [start]

//   while(queue.length > 0) {
//     const current = queue.shift(); // removes the first item in the array
//     console.log(current);

//     for(let neigbour of graph[current]) {
//       queue.push(neigbour); // add to end of array
//     }
//   }
// }

// breadthFirstTraversal(graph, 'a')

// ================ Depth First Search (DFS) ========================
// transverse deep by visiting all children nodes.
// uses stack data structure.

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  f: [],
  e: [],
};

// const depthFirstTraversal = (graph, start) => {
//   const stack = [start]

//   while(stack.length > 0) {
//     const current = stack.pop(); // removes from end of array
//     console.log(current);

//     for(let neigbour of graph[current]) {
//       stack.push(neigbour); // add to end of array
//     }
//   }
// }

const haspath = (graph, src, dst) => {
  const stack = [src];

  while (stack.length > 0) {
    const current = stack.pop();
    if (current === dst) return true;
    for (let neigbour of graph[current]) {
      stack.push(neigbour);
    }
  }

  return false;
};

console.log(haspath(graph, "d", "e"));

// ================ Undirected Graph ========================

// To keep track of visited nodes, we use a Set. We check if the item does not exist in the Set before we push to the stack/queue

// for undirected path between edges in a graph, it means we have a bidirectional flow between the edges. We need to first convert to adjency list before traversal. We need to also mark visited nodes.
// const undirectedPath = (edges, nodeA, nodeB) => {
// 	const graph = buildGraph(edges);
// 	return hasPath(graph, nodeA, nodeB, new Set());
// };

// // function to traverse the graph
// const hasPath = (graph, src, dst, visited) => {
// 	if (src === dst) return true;
// 	if (visited.has(src)) return false;

// 	visited.add(src);

// 	for (let neigbour of graph[src]) {
// 		if (hasPath(graph, neigbour, dst, visited)) {
// 			return true;
// 		}
// 	}

// 	return false;
// };

// // function to convert edges to adjacency list
// const buildGraph = edges => {
// 	const graph = {};

// 	for (let edge of edges) {
// 		// of -> values
// 		const [a, b] = edge;

// 		if (!(a in graph)) graph[a] = []; // in -> keys
// 		if (!(b in graph)) graph[b] = []; // in -> keys

// 		graph[a].push(b);
// 		graph[b].push(a);
// 	}

// 	return graph;
// };

// const edges = [['i', 'j'], ['k', 'i'], ['m', 'k'], ['k', 'l'], ['o', 'n']];

// console.log(undirectedPath(edges, 'j', 'o'));
