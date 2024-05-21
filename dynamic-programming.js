// ========================= Dynamic Programming ===========================
// This is algorithmic problem is first broken down into sub-problems, the results are saved, and then the sub-problems are optimized to find the overall solution

// Two methods is memoization and tabulation
// Dynamic programming uses recursion for memoization and iterative apprach for tabulation.
// Don't add conditionals to check child recursive calls, just add the base cases.

// Memoization recipe
// 1. Make it work
//   - visualize the problem as a tree
//   - implement the tree using recursion (add the base cases)
//   - test the solution

// 2. Make it efficient
//   - add a memo object (also pass to the recursive calls)
//   - add a base to return the memo values
//   - store the return values into the memo

// fib sequence (using memoization)

// const fib = (n, memo = {}) => {
//   if(n in memo) return memo[n];
//   if (n <= 2) return 1;
//   memo[n] = fib(n-1, memo) + fib(n-2, memo);
//   return memo[n]
// }

// console.log(fib(60));

// fib sequence (using tabulation - building a table(array))
// rules - initialize a table(array) one unit bigger than n. Fill with default value of zero

// const fib = n => {
// 	const table = Array(n + 1).fill(0);
// 	table[1] = 1;
// 	for (let i = 0; i <= n; i++) {
// 		table[i + 1] += table[i];
// 		table[i + 2] += table[i];
// 	}

// 	return table[n];
// };

// console.log(fib(60));
