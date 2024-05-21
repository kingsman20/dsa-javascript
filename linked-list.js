// ===========================  LinkedList  ===========================

// - for linkedList, we consider the current.next

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// const a = new Node(1);
// const b = new Node(2);
// const c = new Node(3);
// const d = new Node(4);

// a.next = b;
// b.next = c;
// c.next = d;

// const printSum = (head) => {
//   let sum = 0;
//   let current = head;

//   while(current !== null) {
//     sum += current.value;
//     current = current.next;
//   }

//   return sum;
// }

// const printSumRec = (head) => {
//   let current = head;
//   if(current === null) return 0;

//   return current.value + printSumRec(current.next);
// }

// console.log(printSumRec(a));

// const printLinkedListInteractively = (head) => {
//   while (head !== null) {
//     console.log(head.value);
//     head = head.next;
//   }
// }

// const printLinkedListRecursively = (head) => {
//   if(head === null) return null;
//   console.log(head.value);
//   printLinkedListRecursively(head.next);
// }

//   printLinkedListRecursively(a);
