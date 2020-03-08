
const testFunction = (arr, k) => {
  let length = arr.length;

  // for (let i = 0; i < length; i++) {
  //   for (var j = 0; j < length; j++) {
  //     if(arr[i] + arr[j] == k) {
  //       return true;
  //     }
  //   }
  // }
  // return false;

  let obj = {};
  let rest = [];
  for (var i = 0; i < length; i++) {
    if(obj[k-arr[i]]) {
      rest.push(k-arr[i]);
      rest.push(arr[i]);
    } else {
      obj[arr[i]] = true;
    }
  }
  return rest;
  // bubble sort
  // let swap = true;
  // do {
  //     swap = false;
  //     for (let i = 0; i < length; i++) {
  //       if(arr[i] > arr[i+1]) {
  //         [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
  //         swap = true;
  //       }
  //     }
  //
  // } while(swap == true);

  // insertion sort
  // for (let i = 1; i < length; i++) {
  //     for (let j = 0; j < i; j++) {
  //       if(arr[i] < arr[j])
  //       {
  //         let [find] = arr.splice(i, 1);
  //         arr.splice(j, 0, find);
  //       }
  //     }
  // }

  // merge sort
  // if(length < 2) {
  //   return arr;
  // }
  // let mid = Math.floor(length/2);
  // let first = arr.slice(0, mid);
  // let second = arr.slice(mid, length);
  // return merge(testFunction(first), testFunction(second));


  // quick sort
  // if(length < 2) {
  //   return arr;
  // }
  // let lastindexvalue = arr[length-1];
  // let mid = Math.floor(length/2);
  //
  // let left = [];
  // let right = [];
  // for (let i = 0; i < length-1; i++) {
  //   if(lastindexvalue > arr[i]) {
  //     left.push(arr[i]);
  //   } else {
  //     right.push(arr[i]);
  //   }
  // }
  // return [...testFunction(left), lastindexvalue, ...testFunction(right)];

  // return arr;
}

// const merge = (arr1, arr2) => {
//   let ret = [];
//   while(arr1.length && arr2.length) {
//     if(arr1[0] > arr2[0]) {
//       ret.push(arr2.shift());
//     } else {
//       ret.push(arr1.shift());
//     }
//   }
//
//   return [...ret, ...arr1, ...arr2];
// }







let arr = [10, 15, 3, 7];
let k = 17;

// let arr = [9,3,1,10,5,2,8,4,6];
console.log(testFunction(arr, k));
