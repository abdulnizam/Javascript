
const sampleTest = str => {
  let filter = {};
  let result = '';
  for(let i = 0; i < str.length; i++) {
    if(filter[str[i]]) {
      result += str[i];
    } else {
      filter[str[i]] = 1;
    }
  }

  return result;
}

let str = 'ABC';

// console.log(sampleTest(str));
//

// const sortbyorder = (arr1, arr2) => {
//   if(arr1.score - arr2.score)
//   {
//     if(arr1.user_id - arr2.user_id) {
//         return 1;
//     } else {
//       return 0;
//     }
//   }
//   return -1;
// }



const getHotels = (scores, min_score) => {
    let ids = new Set();
    for(let i = 0; i < scores.length; i++) {
      if(scores[i].score >= min_score) {
        ids.add(scores[i].hotel_id);
      }
    }
    return [...ids];
}



let scores = [
    {'hotel_id': 1001, 'user_id': 502, 'score': 7},
    {'hotel_id': 1001, 'user_id': 501, 'score': 7},
    {'hotel_id': 1001, 'user_id': 503, 'score': 7},
    {'hotel_id': 2001, 'user_id': 504, 'score': 10},
    {'hotel_id': 3001, 'user_id': 505, 'score': 5},
    {'hotel_id': 2001, 'user_id': 506, 'score': 5}
]

// console.log(getHotels(scores, 7));

const isBalanced = exp => {
  let initial = {"}" : "{", "]": "[", ")":"("};
  let obj = []
  let index;
  for(let i = 0; i < exp.length; i++){
    index = obj.indexOf(initial[exp[i]]);
    if(index != -1) {
      obj.splice(index, 1);
    } else {
      obj.push(exp[i]);
    }
  }
  if(obj.length > 0){
    return 'NOT BALANCED';
  }
  return 'BALANCED';
}

let exp = "[()]{}{[()()]()}";
// console.log(isBalanced(exp));



const makePalindrome = str => {
  let res = '';
  for(let i = 0; i < str.length; i++) {
    if(is_palindrome(res+str)) {
      return res+str;
    } else {
      res += str[str.length-(i+1)];
    }
  }
  return res+str;
}

const is_palindrome = str => {
  return str === str.split('').reverse().join('');
}

let string = 'race'
console.log(makePalindrome(string));
