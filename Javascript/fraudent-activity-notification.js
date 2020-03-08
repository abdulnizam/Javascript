function median(numbers) {
    // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
    var median = 0, numsLen = numbers.length;
    numbers.sort();

    if (
        numsLen % 2 === 0 // is even
    ) {
        // average of two middle numbers
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else { // is odd
        // middle number only
        median = numbers[(numsLen - 1) / 2];
    }

    return median;
}

// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
    let notification = 0;
    let exp_len = expenditure.length;
    let i = 0;
    if(exp_len > d){
        for(let i = 0; i < exp_len-d; i++) {
            let expt = expenditure.slice(i,d+i);
            let medians = median(expt);
            if(expenditure[d+i] >= 2*medians){
                notification += 1;
            }
        }
        return notification
    } else {
        return notification;
    }


}


let exp = [2,3,4,2,3,6,8,4,5];
let length = 5;
console.log(activityNotifications(exp, length));
