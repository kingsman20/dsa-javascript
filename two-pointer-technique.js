// =========================== Two pointer ===========================
// works for sorted array

// const findTwoSumInASortedArray = (arr, target) => {
//   let left = 0, right = arr.length - 1;
//   while (left < right) {
//     const currentSum = arr[left] + arr[right];
//     if (currentSum === target) {
//       return [arr[left], arr[right]]
//     } else if (currentSum > target) {
//       right--;
//     } else {
//       left++;
//     }
//   }

//   return null;
// }

// console.log(findTwoSumInASortedArray([1, 3, 2, 2, 4, 5], 9));

// =========================== Fast and slow pointers ===========================
// Also called tortoise and hare

// class Node {
//   constructor(value, next=null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// const linkedListHasCycle = (head) => {
//   let fastPointer = head, slowPointer = head;
//   while(fastPointer != null && fastPointer.next != null) {
//     fastPointer = fastPointer.next.next;
//     slowPointer = slowPointer.next;

//     if(fastPointer === slowPointer) {
//       return true;
//     }
//   }

//   return false;
// }

// const node6 = new Node(6);
// const node5 = new Node(5, node6);
// const node4 = new Node(4, node5);
// const node3 = new Node(3, node4);
// const node2 = new Node(2, node3);
// const head = new Node(1, node2);

// node6.next = node3

// console.log(linkedListHasCycle(head));
