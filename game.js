var random  = words[Math.floor(   Math.random()   * words.length)];
var wordArray = random.split('');
console.log(wordArray);

document.getElementById("input_0").value = wordArray[0];


