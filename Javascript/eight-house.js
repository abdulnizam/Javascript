// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function cellCompete(states, days)
{
    if (states.length != 8 || days < 0)
    {
        return states;
    }
    // local variables
    let index, previousValue, nextValue;

    // loop for each day
    for (let i = 0; i < days; i++)
    {
        // index of current cell
        index = 0;
        // value of the previous cell
        previousValue = 0;
        // value of the next cell
        nextValue = 0;

        // loop for each cell in the array
        while (index < states.length)
        {
            // if the current index is not last index of the given array,
            // set the value of nextValue, else it would remain 0.
            if (index < states.length - 1)
            {
                nextValue = states[index + 1];
            }
            else if (index == states.length - 1)
            {
                nextValue = 0;
            }

            // if nextValue is same as previousValue
            if (nextValue == previousValue)
            {
                // save the current index value for next iteration of loop
                previousValue = states[index];
                // set current index value
                states[index] = 0;
            }
            else
            {
                // save the current index value for next iteration of loop
                previousValue = states[index];
                // set current index value
                states[index] = 1;
            }
            // next item in the loop
            index++;
        }
    }

    // return states array
    return states;
}
// FUNCTION SIGNATURE ENDS

const state = [1,0,0,0,0,1,0,0]
const days = 1
console.log(cellCompete(state, days));
