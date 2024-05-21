// =========================== Binary Tree ===========================

// - depth first search uses stack and can be solved iteractively (by creating a stack) or recursively (by utilizing the call stack, we don't need to explicitly create a stack ds)
// - breadth first search uses queue and are usually solve interactively since using recursion would create a stack (which goes against the idea of using a queue).
// - for binary tree, we consider, current.right and current.left
// - Breadth first search seems to be more useful for shortest path problem

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// const depthFirstSearch = (root) => {
//   const stack = [root];

//   while(stack.length > 0) {
//     const currentValue = stack.pop();
//     console.log(currentValue.val);

//     if(currentValue.right) stack.push(currentValue.right);
//     if(currentValue.left) stack.push(currentValue.left);
//   }
// }

const breadthFirstSearch = (root) => {
  const stack = [root];

  while (stack.length > 0) {
    const currentValue = stack.shift();
    console.log(currentValue.val);

    if (currentValue.right) stack.push(currentValue.right);
    if (currentValue.left) stack.push(currentValue.left);
  }
};

// const depthFirstSearchRecursively = (root) => {
//   if (root === null) return [];
//   const leftValues = depthFirstSearchRecursively(root.left);
//   const rightValues = depthFirstSearchRecursively(root.right);
//   return [root.val, ...leftValues, ...rightValues]
// }

console.log(breadthFirstSearch(a));
