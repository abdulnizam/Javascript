function reverseAndCapitalise(sentenceIn) {

    var words = sentenceIn.split(" ");
    var symbol = ''
    for (var i = 0; i < words.length; i++) {
        var lastChar = words[i].charAt(words[i].length - 1);
        if (lastChar == "!" || lastChar == "." || lastChar == "," || lastChar == "?") {
            symbol = lastChar;
            words[i] = words[i].slice(0, -1);
        }
        console.log(words[i]);
        words[i] = words[i].split("").reverse().join("");
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();

    }

    var res = words.reverse().join(" ");
    console.log(res+symbol);


}

reverseAndCapitalise("Hello World!");
