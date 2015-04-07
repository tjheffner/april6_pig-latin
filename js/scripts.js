var translate = function(word) {
    var input = word;
    var ay = "ay";
    var consonants = "";
    var output = word;

    for (var i = 0; i <= word.length; i++) {

      if (word[i] === 'q' && word[i+1] === 'u') {

            output = input.slice(i+2, input.length);

            consonants += input.substr(0, 2);

          return output + consonants + ay;

      } else if (word[i] !== 'a' && word[i] !== 'e' && word[i] !== 'i'
                                 && word[i] !== 'o' && word[i] !== 'u') {

            output = input.slice(i + 1, input.length);

            consonants += input[i];

      } else {
          return output + consonants + ay;
      }
    }
};

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    var word = $("input#word").val();
    var result = translate(word);

  $("#translated").text(result);

  $("#result").show();
  event.preventDefault();
  });
});
