// Write a recursive version of the previous function (or an iterative version if you already did a recursive version).

var sum = (array) => {
    if(array.length === 0) {
      return 0;
    } else {
      let value = parseInt(array[0]);
      if(!Number.isNaN(value)){
        return value + sum(array.slice(1));
      } else {
        return sum(array.slice(1));
      }
    }
}

// Test cases
console.log(sum(['a','2','3','b','5'])); // 10
console.log(sum([1,3,4])); // 8
