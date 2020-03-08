const divide = arr => {
  let length = arr.length;

  if(length < 2) {
    return arr;
  }
  // find the mid
  let mid = Math.floor(length/2);
  // divide using slice
  let arr_one = arr.slice(0, mid);
  let arr_two = arr.slice(mid, length);

  return sort_asc(divide(arr_one), divide(arr_two), 'desc');
}

const sort_asc = (arr_one, arr_two, flag = 'asc') => {
  let flags = {'asc': '>', 'desc': '<'};
  let sorted = [];

  while(arr_one.length && arr_two.length) {
    let valid = eval(arr_one[0] + flags[flag] + arr_two[0]);
    if(valid)
    {
      sorted.push(arr_two.shift());
    } else {
      sorted.push(arr_one.shift());
    }
  }

  return [...sorted, ...arr_one, ...arr_two];
}


const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]
console.log(divide(numbers))
