var pure_numbers=[];
var pureNumberGeneratedDigits = 0;
function Solve(N) {
    // your code goes here
    if(!pure_numbers[N-1]){
        generatePureNumbers();
    }

    return pure_numbers[N-1];
}

function generatePureNumbers() {
  pureNumberGeneratedDigits = pureNumberGeneratedDigits+2;
  var halfDigit = pureNumberGeneratedDigits/2;
  var numberOfCombinations = Math.pow(2, halfDigit);
  var halfNumberOfCombinations = numberOfCombinations/2;

  var firstHalfPureNumbers = [];
  var lastHalfPureNumbers = []
  var currentPureNumber = [];
  for(var i=0; i<halfDigit; i++){
    currentPureNumber[i]= 4;
    currentPureNumber[pureNumberGeneratedDigits-i-1] = 4;
  }
  firstHalfPureNumbers.push(currentPureNumber);

  for(var i=(numberOfCombinations/2)-1; i>0;i--){
    currentPureNumber = Array.from(currentPureNumber);
    currentPureNumber[i] = 5;
    currentPureNumber[pureNumberGeneratedDigits-i-1] = 5;
    firstHalfPureNumbers.push(currentPureNumber);
  }
  currentPureNumber = [];
  for(var i=0; i<halfDigit; i++){
    currentPureNumber[i]= 5;
    currentPureNumber[pureNumberGeneratedDigits-i-1] = 5;
  }
  lastHalfPureNumbers.unshift(currentPureNumber);

  for(var i=(numberOfCombinations/2)-1; i>0;i--){
    currentPureNumber = Array.from(currentPureNumber);
    currentPureNumber[i] = 4;
    currentPureNumber[pureNumberGeneratedDigits-i-1] = 4;
    lastHalfPureNumbers.unshift(currentPureNumber);

  }

  pure_numbers = pure_numbers.concat(firstHalfPureNumbers.concat(lastHalfPureNumbers).map(function(value){
    return parseInt(value.join(""));
  }));
}
function runTest(T) {
  T.forEach(function(v){
    console.log(Solve(v));
  })
}

runTest([1,2,3,4]);
