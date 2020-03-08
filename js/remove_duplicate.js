'use strict';

function remove_duplicate(arr) {
  let b = [];
  for(let i = 0; i < arr.length; i++) {
    if(b.indexOf(a[i]) == -1)
    {
      b.push(a[i]);
    }
  }
  return b;
}

function remove_duplicateB(arr) {
  arr.sort(function(x, y) {
      return x - y;
  });


  return arr;
}

let a = [1,2,5,2,1,8];

let results = remove_duplicateB(a);
console.log(results);
