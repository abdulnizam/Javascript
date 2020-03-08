// Write a program that outputs sequentially the integers from 1 to 99 but on some conditions prints a string instead:
// * when the integer is a multiple of 3 print “Open” instead of the number,
// * when it is a multiple of 7 print “Source” instead of the number,
// * when it is a multiple of both 3 and 7 print “OpenSource” instead of the number.

const sequences = (start, end) => {
  let results = [];
  while(start <= end) {
    results.push(checkValue(start));
    start++;
  }
  return results;
}

const checkValue = val => {
  if(val % 3 === 0 && val % 7 === 0 && val !== 0) {
    return "OpenSource";
  } else if (val % 3 === 0 && val !== 0) {
    return "Open";
  } else if (val % 7 === 0 && val !== 0) {
    return "Source";
  } else {
    return val;
  }
}

let start = 0;
let end = 99;
console.log(sequences(start, end));

// uncomment and  jasmine filename.js
describe("Sequences Test",() => {
  it("test multiple of 3",() => {
    expect("Open").toEqual(checkValue(12));
  })

  it("test multiple of 7",() => {
    expect("Source").toEqual(checkValue(49));
  })

  it("test multiple of both 3 and 7",() => {
    expect("OpenSource").toEqual(checkValue(21));
  })

  it("test 0 to return 0",() => {
    expect(0).toEqual(checkValue(0));
  })
})
