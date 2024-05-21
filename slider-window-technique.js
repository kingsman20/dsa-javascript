// =========================== Two Slider technique ===========================

// const avgOfSubArraysNaive = (arr, k) => {
//   const avg = [];

//   for(let i = 0; i <= arr.length - k; i++) {
//     let sum = 0;
//     for(let j = i; j < i + k; j++) {
//       sum += arr[j];
//     }

//     avg.push(sum/k)
//   }

//   return avg
// }

// const avgOfSubArraysSlidingWindow = (arr, k) => {
//   const avg = [];
//   let windowStart = 0, windowSum = 0;

//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//     windowSum += arr[windowEnd];
//     if(windowEnd >= k - 1) {
//       avg.push(windowSum / k);
//       windowSum -= arr[windowStart]; // substract the element at the end of the window
//       windowStart++;
//     }
//   }

//   return avg
// }

// const minContiguousSubArray = (arr, k) => {
//   let windowStart = 0, windowSum = 0, smallestArrayLength = Infinity;

//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//     windowSum += arr[windowEnd];

//     while (windowSum >= k) {
//       const currentArrayLength = windowEnd - windowStart + 1;
//       smallestArrayLength = Math.min(smallestArrayLength, currentArrayLength);
//       windowSum -= arr[windowStart];
//       windowStart++;
//     }
//   }

//   return smallestArrayLength;
// }

// console.log(minContiguousSubArray([1, 3, 2, 2, 4, 5], 6));
