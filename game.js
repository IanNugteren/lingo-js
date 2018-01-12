var random = Math.floor(Math.random() * 479);
var answer = words[random];
var answerArray = answer.split('');
var checkButton = document.getElementById('check');
var newButton = document.getElementById('new');
var correct = true;
var currentRow = 1;


console.log(answerArray);

function start() {
    var res = answer.charAt(0)
    for(var i = 1; i < 6; i++) {
        document.getElementById("letter" + i + "_0").value = res;
    }
}

checkButton.setAttribute ("onclick", "check()");
newButton.setAttribute ('onclick', 'nieuwWoord()');

function check(){
    for (var i = 0 ; i < 5; i++){
        var input = document.getElementById('letter' + currentRow + '_'  + i);

        if (answerArray.includes(input.value)) {
            // Als het antwoord (in array) de letter bevat.
            input.style.backgroundColor = 'yellow';
            document.getElementById('letter' + currentRow  + '_' + i).readOnly = true;
        }

        if (input.value === answerArray[i]){
            // Komt overheen met het antwoord.
            input.style.backgroundColor = 'red';
            document.getElementById('letter' + currentRow  + '_' + i).readOnly = true;
        }
    }
    correct = true;
    for(var i = 0; i < 5; i++){
        var input = document.getElementById('letter' + currentRow  + '_' + i);
        if(input.value != answerArray[i]) {
            correct = false;
        }
    }
    
    if(correct == true) {
        alert('Het antwoord is goed');
    } else{
        currentRow++;
    }

    if(currentRow > 5){
        alert('het antwoord is niet goed. Het antwoord is ' + answer);
    }

}

function nieuwWoord() {
    window.location.href = 'index.html';
}


