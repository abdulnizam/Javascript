const look = (arr, flag='max') => {
  let value = arr[0][0];
  let flags = {'max': '>', 'min': '<'};
  arr.forEach((x) => {
    let find = flag == 'max' ? Math.max.apply(null, x) : Math.min.apply(null, x);
    let cal = eval(find + flags[flag] + value);
    if(cal) {
      value = find;
    }

  })
  return value;
}





const matrix = [[4,9,5], [2,8,1], [3,6,7]];
console.log(look(matrix, 'max')); // 9
console.log(look(matrix, 'min')); // 1
