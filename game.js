var random = Math.floor(Math.random() * 479);
var answer = words[random];
var answerArray = answer.split('');
var checkButton = document.getElementById('check');
console.log(answerArray);

function Start() {
    var res = answer.charAt(0)
    document.getElementById("letter_0").value = res;
}

checkButton.setAttribute ("onclick", "check()");

function check(){
    for(var i = 0 ; i < 5; i++){
        var input = document.getElementById('letter_' + i);
        console.log(input.value);

        // Letters worden rood als ze op de goede plaats staan.

        if(input.value == answerArray[i]){
            input.style.backgroundColor = 'red';    
        }

        // Letter die in het woord maar niet op de juiste plek staan worden geel.


    }
}




