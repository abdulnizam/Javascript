// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// using stack to sort the string
class Stack {

    constructor(c) {
        this.items = [c];
    }

    process(c) {
        if (this.findTheLastElement() == c) {
            this.pop();
        } else {
            this.push(c);
        }
    }

    push(c) {
        this.items.push(c);
    }

    pop() {
        this.items.pop();
    }

    toString() {
        return this.items.join("");
    }

    findTheLastElement() {
        return this.items[this.items.length - 1];
    }
}

function solution(S) {

    // make sure the length is to above 2 else it return the results
    if (S.length < 2) {
        return S;
    }
    // setting the stack with initial value
    var stack = new Stack(S[0]);

    // process the string one by one
    for (var i = 1; i < S.length; i++) {
        stack.process(S[i]);
    }

    // convert the final array to string
    return stack.toString();
}

console.log(solution('ACCAABBC'));