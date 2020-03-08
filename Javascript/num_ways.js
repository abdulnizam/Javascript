let alp = {'a' : 1, 'b': 2, 'c':3, 'd':4, 'l': 12};

let count = 0;
const run_ways = num => {
  let len = num.length;

  if(!num) {
    count++;
    return;
  }

  let inital =  num[0];
  if(inital == 0){
    return;
  }
  count++;
  if(len > 1)
  {
    let two = parseInt(num.slice(0, 1));
    if(two < 26) {
      count++;
    }
  }
  let rest = num.slice(1, len);
  if(rest){
    run_ways(rest);
  }

}




console.log(run_ways('111111'));
console.log(count);
