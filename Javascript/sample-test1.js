// Write a C program that roughly measures the overhead of a context switch between the kernel
// and userspace on a UNIX/Linux system (without using the pthread API).
// Please indicate the assumptions your rough estimation is based on.
// string = "Ohoo and #rules"
//
// let regex = /^(?=.*\bOhoo\b)(?=.*\brules\b).*$/;
// results = string.match(regex);
//
// console.log(results);

// const absolute = (arr) => {
//   var j = arr[0].length;
//   var left = right =0;
//   for(var i = 0; i < j; i++){
//     left += arr[i][i];
//     right += arr[i][j-i-1];
//   }
//
//   return Math.abs(left-right);
// }
//
// const absolute2 = arr => {
//   let i = 0;
//   let j = arr.length-1;
//   let left = right = 0;
//   arr.forEach(val => {
//       left +=val[i];
//       right +=val[j-i];
//       i++;
//   })
//   return Math.abs(left-right);
// }
//
// const arr = [[1,3,4],[3,18,23],[13,6,10]];
// console.log(absolute2(arr));
