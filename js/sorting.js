function sort(arr) { 

  let sorted = [];

  arr.forEach(function(x){
     let find_index = sorted.findIndex(v => v >= x );
      if( find_index != -1) {
        sorted.splice(find_index, 0, x)
      }else{
        sorted.push(x);
      }

  });

  return sorted;

}


console.log(sort([1,0,1,1,0,0,0,1]));
console.log(sort([3,1,2,4,6,2,8]));
