// Solve the game "Guess a number", find a secret integer between 1 and 1000000
// in less than 50 guesses. Write a function that solves the game without user input and returns the
// solution by using the function verify() which is defined with the following
// specification:
// function verify(guess: integer) -> integer
// Argument:
//      guess (integer) the number to verify
// Returns:
//      0 if the guess is the solution, your program won
//      -1 if the solution is smaller than the guess parameter
//      1  if the solution is bigger than the guess parameter
//
// Warning: You are not allowed to call verify() more that 50 times or you loose.

const random = (start, end) => {
  // Math.floor(Math.random() * ((y-x)+1) + x);
  return Math.floor(Math.random() * ((end-start)+1) + start);
}

const findSecret = (num) => {
  let random_number = random(num[0], num[1]);

  return {
    guess_no: random_number,
    arr: num
  };
}

const verify = (guess) => {
  if( guess == secret) {
    return 0;
  } else if (guess < secret) {
    return -1;
  } else {
    return 1;
  }
}

let start = 1
let end = 1000000

let secret = random(start, end);
let guess = 1;
// initial guessing known values
let x = {
  guess_no: end,
  arr: [start, end]
};

while (guess <= 50) {
  let guess_no = x['guess_no'];
  // call verify
  let guessed_status = verify(guess_no);
  if(guessed_status == 0)
  {
      console.log("CONGRATULATIONS!!! "+ secret +" YOU GUESSED IT RIGHT IN "
              + guess + " GUESS ");
      break;
  } else if (guessed_status == -1) {
    console.log("OOPS SORRY!! TRY A LESSER NUMBER")
    x = findSecret([guess_no, x['arr'][1]]);
  } else {
    console.log("OOPS SORRY!! TRY A GREATER NUMBER")
    x = findSecret([x['arr'][0], guess_no]);
  }
  guess++;
}
