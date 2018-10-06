function run(number) {

    isSemiprime = isSemiPrime(number);

    if (isSemiprime) {
        return true
    }
    return false;
}

function isSemiPrime(value) {
    for (var i = 2; i < value; i++) {
        if (value % i === 0) {
            return true;
        }
    }
    return false;
}

console.log(run(77));
console.log(run(2));


// Test

// describe("SolutionTest", function() {

//     it("test semiprime", function() {
//         assert.equal(run(77), true);
//     });

//     it("test prime", function() {
//         assert.equal(run(2), false);
//     });
// });