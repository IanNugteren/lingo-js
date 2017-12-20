var random = Math.floor(Math.random() * 479);
var answer = words[random];
var answerArray = answer.split('');
console.log(answerArray);

var checkButton = document.getElementById('check');

checkButton.setAttribute ("onclick", "check()");

function check(){
    for(var i = 0 ; i < 5; i++){
        var input = document.getElementById('letter_' + i);
        console.log(input.value);

        if(input.value == answerArray[i]){
            input.style.backgroundColor = 'red';    
        }
    }
}


