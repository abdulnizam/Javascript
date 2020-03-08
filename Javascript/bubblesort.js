
const bubblesort = (arr) => {
  let swap = false;
  let length = arr.length;
  do {
    swap = false;
    for (let i = 0; i < length-1; i++) {
      if(arr[i] > arr[i+1]) {
          [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
          swap = true;
      }
    }
  } while (swap);

  return arr;
}


let arr = [5, 10, 1, 9, 2, 8, 3, 7, 4, 6, 1];
console.log(bubblesort(arr));
