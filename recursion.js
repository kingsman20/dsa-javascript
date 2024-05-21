// ================ Recursion ========================
// we need to think about the base case

const factorial = (number) => {
  if (number === 0 || number === 1) return 1; // base case
  return number * factorial(number - 1);
};

// 5 * f(4) = 5 * 4 * f(3) = 5 * 4 * 3 * f(2) = 5 * 4 * 3 * 2 * f(1) // base case
console.log(factorial(5));
