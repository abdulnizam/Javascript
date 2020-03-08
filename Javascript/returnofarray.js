// Write a function that, when called, returns an array for which each element is a letter of the alphabet,
// from "A" to "Z" (exactly once, in order and upper case).
// Your code cannot contain the character ' (quote), " (double quote) or ` (back quote)

const returnArr = (string) => {
  // to fing and remove the character ' (quote), " (double quote) or ` (back quote)
  let regex = /['"`]+/g;
  string = string.replace(regex, '');
  let arr = [];
  for (var i = 0; i < string.length; i++) {
    // to upper case
    let each_elm = string[i].toUpperCase();
    // remove dubliates to satisfy condition "exactly once"
    if(arr.indexOf(each_elm) == -1) {
      arr.push(each_elm);
    }
  }
  // return the array unique alpabets
  return arr.sort();

}

const string = "asdndwirun'fla`nsnfgb";
console.log(returnArr(string));
