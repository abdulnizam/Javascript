const uberProb = arr => {

  let total = 1;
  for(let i = 0; i < arr.length; i++){
    total *= arr[i];
  }
  let res = []
  for(let j = 0; j < arr.length; j++){
    res.push(total/arr[j]);
  }


  return res;

}


console.log(uberProb([1, 2, 3, 4, 5]));
