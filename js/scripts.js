function translate(string) {
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U', 'y', 'Y'];
  var inputArray = string.split(' ');
  inputArray = inputArray.map(function(input) {
    var consonantCluster = ['-'];
    var singleWord = input.split('');
    if(!/[aeiouAEIOU]/.test(input)) {
      return input;
    }
    if(singleWord[0] === 'y') {
      consonantCluster.push(singleWord.shift());
    } else while(!vowels.includes(singleWord[0])) {
      if(singleWord[0] === 'q' && singleWord[1] === 'u') {
        consonantCluster.push(singleWord.shift());
        consonantCluster.push(singleWord.shift());
      } else {
        consonantCluster.push(singleWord.shift());
      }
    }
    input = singleWord.join('') + consonantCluster.join('');
    return input.concat('ay');
  });
  return inputArray.join(' ');
}


$().ready(function() {
  $('form#pigLatin').submit(function(event) {
    event.preventDefault();
    var userInput = $('#string').val();
    var result = translate(userInput);
    $('#result p').text(result);
  })
});
