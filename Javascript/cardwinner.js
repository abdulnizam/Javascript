
function cardWinner(andrea, maria, key){
  let andrea_score = 0;
  let maria_score = 0;

  if(key === 'Odd') {
    andrea.shift();
    maria.shift();
  }

  let length = Math.min(andrea.length, maria.length);

  for(let i = 0; i < length; i++) {
    if(i % 2 === 1) {
      continue;
    } else {
      andrea_score += andrea[i] - maria[i];
      maria_score += maria[i] - andrea[i];
    }
  }

  if(andrea_score > maria_score) {
    return 'Andrea';
  } else if(maria_score > andrea_score) {
    return 'Maria';
  } else {
    return 'Tie';
  }
}

console.log(cardWinner([1,2,3], [2,1,3], 'Even'));
