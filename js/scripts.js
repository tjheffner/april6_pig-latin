var translate = function(word) {
    var text1 = word;
    var ay = "ay";
    var temp = "";
    var output = word;

    for (var i = 0; i <= word.length; i++) {

        if (word[i] !== 'a' && word[i] !== 'e' && word[i] !== 'i'
                        && word[i] !== 'o' && word[i] !== 'u') {

            output = text1.slice(i + 1, text1.length);

            temp += text1[i];

        } else {
            return output + temp + ay;
        }

    }

};
