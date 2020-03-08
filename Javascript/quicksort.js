
quickSort = arr => {
  let length = arr.length;
  if(length < 2) {
    return arr;
  }

  let lastIndex = length - 1;
  let lastValue = arr[lastIndex];

  let leftArray = [];
  let rightArray = [];

  for (var i = 0; i < lastIndex; i++) {
    if(lastValue > arr[i]) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }

  return [...quickSort(leftArray), lastValue, ...quickSort(rightArray)];

}
const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]
console.log(quickSort(numbers));

// describe("first",() =>{
//   it("second",() => {
//     expect([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]).toEqual(quickSort(numbers));
//   })
// })

// jasmine quicksort.js
