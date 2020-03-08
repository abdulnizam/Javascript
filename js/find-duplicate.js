// let name = ['abdul', 'ajith', 'nizam', 'ajith'];
// let email = ['abdul@gmail.com', 'ajith@gmail.com', 'abdul@gmail.com', 'abdulajith@gmail.com']
//
// let len = name.length;
// let obj = {};
// // console.log(len);
// for(let i = 0; i < len; i++) {
//   obj[email[i]] = name[i];
// }
//
// console.log(Object.values(obj).length);
//
//

let list = [1,2,3,3,4,5,5,6,1]
let filered = [];
let duplicat = [];

for (var i = 0; i < list.length; i++) {
  if(filered.indexOf(list[i]) == -1) {
    filered.push(list[i]);
  } else {
    duplicat.push(list[i]);
  }
}

console.log(duplicat);
