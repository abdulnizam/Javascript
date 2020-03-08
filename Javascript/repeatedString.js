function repeatedString(s, n) {
    let aLen = s.split('').filter(x => x === 'a').length;
    let total = Math.floor(n/s.length);
    let rem = n - (total * s.length);
    let arLen = 0;

    if(rem)
    {
        arLen = s.split('').splice(0, rem).filter(x => x === 'a').length;
    }

    return aLen * total + arLen;
}


console.log(repeatedString('aba', 10 ));
console.log(repeatedString('a', 1000000000000 ));
