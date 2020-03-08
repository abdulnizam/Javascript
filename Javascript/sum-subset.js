const sumofsubset = (arr, k) => {

  arr.sort((a,b) => b-a);
  let sum = 0;
  let results = []
  for(let i = 0; i < arr.length; i++) {
    if((sum+arr[i]) <= k) {
      sum += arr[i];
      results.push(arr[i]);
    }
  }
  if(sum == k) {
    return results;
  }
  return [];
}


let arr = [2,4,6,10];
let k = 16;

console.log(sumofsubset(arr, k));
// return [12, 9, 2, 1]


const findSubset = (arr, k) => {

  let res = [];
  let total = 0, temp = 0;
  for(let i = 0; i < arr.length; i++) {
      let res_inner = [];
      res_inner.push(arr[i]);
      total = arr[i];
      for(let j = 0; j < arr.length; j++) {
          if (i != j) {
            console.log(total, 'total', res_inner);
            total += arr[j];
            if (total <= k ) {
              res_inner.push(arr[j]);
            } else if(i != arr.length-1) {
              console.log(total,'arr', arr[j]);
              total -= arr[j-1]
              console.log(total,'total11', arr[j-1]);

              res_inner.shift()
              res_inner.push(arr[j]);
            }
            console.log(total, 'total2', res_inner);
          }
      }
      if(total == k) {
        res.push(res_inner);
      }
  }

  console.log(res);

}


console.log(findSubset([2,4,6,10], 16));
