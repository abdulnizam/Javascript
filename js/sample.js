//
// function func(a,b) {
//    arguments[1] = 2;
//    alert(b);
//
// }
//
// func(1);

// function filter_arr(array) {
//   array = array.filter(isJunk_date);
//   console.log(array);
// }
//
// function isJunk_date(value) {
//   if(value !== false || value !== null || value !== 0 || value !== ""){
//     return value;
//   }
// }
//
// filter_arr([1,2,4,0,'',2])

// var a = new Array();
// var b = new Array();
//
// a[1] = 5;
// b[2] = 6;
// a = b;
// console.log(a[1]);

// let str = 'AAAA?C'
//
// let len = str.length;
// let count = 0;
// for(let i =0; i < len; i++) {
//   console.log(str[i]);
//   switch (str[i]) {
//     case 'A':
//       count++;
//       break;
//     case 'C':
//       count--;
//       break;
//     case '?':
//       count++;
//       break;
//
//   }
//
//   console.log(count, 'c');
// }
// //
// console.log(count);

// let str = 'ABc'
//
// let rev = str.split('').reverse()
//
// let str = rev.join('');
// console.log(str));
//
// function pal(str) {
//   let rev = str.split('').reverse()
//   let revr = rev.join('');
//
//   console.log(rev.indexOf('4'));
//   console.log(rev.filter(x => x != 4 || x != 5));
//   if(revr == str && ( rev.indexOf('4') !== -1 || rev.indexOf('5') !== -1 )  ){
//     return true;
//   }
//   return false;
// }
//
// function solve(arr) {
//
//   // let a = [ ];
//   // let flag = true;
//   // let i = 0;
//   arr.forEach(function(v){
//       // flag = true;
//       // while(flag){
//       //   if(i.toString().length % 2 == 0 && i != 0 ) {
//       //     if(pal(i.toString())){
//       //       console.log(i);
//       //       a.push(i);
//       //       flag = false;
//       //     }
//       //   }
//       //   i++;
//       //   console.log(i)
//       // }
//
//       Solve(v);
//
//   })
//
//   // console.log(a);
//
// }
//
// var pure_numbers = [];
//
// var pureNumberGeneratedDigits=0;
//
// // solce
//
// function Solve(N) {
//     // your code goes here
//     var next_pure_number = 0;
//     if(!pure_numbers[N-1]){
//         generatePureNumbers();
//     }
//
//     console.log(pure_numbers[N-1]);
// }
//
// function generatePureNumbers() {
//     pureNumberGeneratedDigits = pureNumberGeneratedDigits+2;
//     var currentPureNumbers = [];
//     var currentPureNumber = [];
//     for(var i=0; i<pureNumberGeneratedDigits/2; i++){
//         currentPureNumber[i]= 4;
//         currentPureNumber[pureNumberGeneratedDigits-i] = 4;
//         pure_numbers.push(parseInt(currentPureNumber.join("")));
//     }
//
// }
// var pure_numbers=[];
// var pureNumberGeneratedDigits = 0;
// function Solve(N) {
//     // your code goes here
//     if(!pure_numbers[N-1]){
//         generatePureNumbers();
//     }

//     return pure_numbers[N-1];
// }

// function generatePureNumbers() {
//   pureNumberGeneratedDigits = pureNumberGeneratedDigits+2;
//       var halfDigit = pureNumberGeneratedDigits/2;
//   var numberOfCombinations = Math.pow(2, halfDigit);
//   var halfNumberOfCombinations = numberOfCombinations/2;

//       var firstHalfPureNumbers = [];
//   var lastHalfPureNumbers = []
//       var currentPureNumber = [];
//   for(var i=0; i<halfDigit; i++){
//   currentPureNumber[i]= 4;
//   currentPureNumber[pureNumberGeneratedDigits-i-1] = 4;
//   }
//   firstHalfPureNumbers.push(currentPureNumber);

//   for(var i=(numberOfCombinations/2)-1; i>0;i--){
//     currentPureNumber = Array.from(currentPureNumber);
//     currentPureNumber[i] = 5;
//     currentPureNumber[pureNumberGeneratedDigits-i-1] = 5;
//     firstHalfPureNumbers.push(currentPureNumber);

//   }
//   currentPureNumber = [];
//   for(var i=0; i<halfDigit; i++){
//     currentPureNumber[i]= 5;
//     currentPureNumber[pureNumberGeneratedDigits-i-1] = 5;
//   }
//   lastHalfPureNumbers.unshift(currentPureNumber);

//   for(var i=(numberOfCombinations/2)-1; i>0;i--){
//     currentPureNumber = Array.from(currentPureNumber);
//     currentPureNumber[i] = 4;
//     currentPureNumber[pureNumberGeneratedDigits-i-1] = 4;
//     lastHalfPureNumbers.unshift(currentPureNumber);

//   }

//   pure_numbers = pure_numbers.concat(firstHalfPureNumbers.concat(lastHalfPureNumbers).map(function(value){
//     return parseInt(value.join(""));
//   }));
// }
// function runTest(T) {
//   T.forEach(function(v){
//     console.log(Solve(v));
//   })
// }

// runTest([1,2,3]);

// function remove_duplicate(arr) {
//   let results = [];
//   for(let i = 0; i < arr.length; i++) {
//     if(results.indexOf(arr[i]) == -1)
//     {
//       results.push(arr[i]);
//     }
//   }
//   return results;
// }

// const toberemoved = [1,2,5,2,1,8];

// console.log(toberemoved.indexOf(2));

// console.log(remove_duplicate(toberemoved));

function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let left = 0,
        maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        console.log("charSet >", charSet);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

const input = "abcabcbb";
console.log(lengthOfLongestSubstring(input));
