const insertionSort = arr => {

  let length = arr.length;

  for (var i = 1; i < length; i++) {
    for (var j = 0; j < i; j++) {
      if(arr[i] < arr[j]) {
        // [arr[i], arr[j]] = [arr[j], arr[i]];
        let [val] = arr.splice(i, 1);
        arr.splice(j, 0, val);
      }
    }
  }

  return arr;
}


const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10];
console.log(insertionSort(numbers));
