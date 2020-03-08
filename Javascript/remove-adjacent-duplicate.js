

const removeDuplicate = arrs => {
  let str = arrs.split("");
  let arr = [];
  let last_value = 0;
  for(let i = 0; i < str.length; i++) {
    if( str[i] != str[i+1] && str[i] != last_value) {
      arr.push(str[i]);
    } else {
      last_value = str[i];
    }
  }
  if(arr.length>1)
  {
    if(arr[arr.length-1] == arr[arr.length-2]) {
      arr.splice(arr.length-2, 2);
    }
  }

  return arr.join("");
}





let str = "acaaabbbabcdddddd";

console.log(removeDuplicate(str));
