
const bruteForce = (arr, k) => {
  let len = arr.length;
  for(let i = 0; i < len; i++) {
    for (let j = i+1; j < len; j++) {
      if(arr[i] + arr[j] == 17) {
        return true;
      }
    }
  }

  return false;
}

const sum_pair_arr = (arr, k) => {
  let len = arr.length;
  let obj = {}
  for(let i = 0; i < len; i++) {
    let sum = k - arr[i]
    if( obj[sum]) {
      return true;
    } else {
      obj[arr[i]] = 1;
    }
  }
  console.log(obj);
  return false;
}




let arr = [10, 15, 3, 7];
let k = 17;

let answer = sum_pair_arr(arr, k);
console.log(answer);
if(answer) {
  console.log('Test Passed');
} else {
  console.log('Test Failed');
}
 // return true since 10 + 7 is 17.
