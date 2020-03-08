// Write a function that takes a list of strings and
// returns the sum of the list items that represents an integer (skipping the other items)

const sumoflist = (arr) => {
  let sum = 0;
  arr.forEach(function (val) {
      let value = parseInt(val);
      if(!Number.isNaN(value)){
        sum += value;
      }
  });
  return sum;
}

const string = ['a', 'b', 'c', '2', '3'];
console.log(sumoflist(string));
