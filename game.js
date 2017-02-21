var geheimwoord;
var geheimeLetters;

var isStarted = false;
var letterCount = 5;		// default is 5
var poging = 0;


function StartGame() {

    // retrieve checked item, and set letterCount to that value
    var elements = document.getElementsByName('count');
    for (var i = 0, length = elements.length; i < length; i++) {
        if (elements[i].checked) {
            letterCount = elements[i].value;
            console.log('Setting letterCount to: ' + letterCount);
            break;
        }
    }

    // now create game interface
    var gameTable = document.getElementById('lingoTable');
    if (null == gameTable) {
        alert("Error: can't create game interface, missing element lingoTable");
        return false;
    }
    gameTable.innerHTML = "";
    // create rows
    for (var rows = 0; rows<5; rows++) {
        var row = "<tr>";
        // create cells
        for (var cells = 0; cells<letterCount; cells++) {
            row += "<td><input class='form-control' id='letter" + rows + "." + cells + "'></td>";
        }
        row += "</tr>";
        gameTable.innerHTML += row;
    }

    // nieuw geheim woord
	geheimwoord = words5[ Math.floor(Math.random() * words.length) ];
    console.log(geheimwoord);
    geheimeLetters = geheimwoord.split("");

    // zet eerste letter
    document.getElementById('letter0.0').value = geheimwoord.charAt(0);

    isStarted = true;
}

function Check() {
	// get the HTML elements
	var guess0 = document.getElementById('letter0.' + poging);
	var guess1 = document.getElementById('letter1.' + poging);
	var guess2 = document.getElementById('letter2.' + poging);
	var guess3 = document.getElementById('letter3.' + poging);
	var guess4 = document.getElementById('letter4.' + poging);

	// get the letters that were entered
	var letter0 = guess0.value;
	var letter1 = guess1.value;
	var letter2 = guess2.value;
	var letter3 = guess3.value;
	var letter4 = guess4.value;

	// haal alle kleurtjes weg
	guess0.style.backgroundColor = '';
	guess1.style.backgroundColor = '';
	guess2.style.backgroundColor = '';
	guess3.style.backgroundColor = '';
	guess4.style.backgroundColor = '';

	var goedeletters = geheimeLetters.slice();

	// compare geheimeletter 0 to letter0
	if ( letter0 == geheimeLetters[0] ) {
		guess0.style.backgroundColor = "red";
		goedeletters[0] = '!';

	} else if ( goedeletters.indexOf(letter0) > -1 ) {
		guess0.style.backgroundColor = "yellow";
	}

	if ( letter1 == geheimeLetters[1] ) {
		guess1.style.backgroundColor = "red";
		goedeletters[1] = '!';
	} else if ( goedeletters.indexOf(letter1) > -1 ) {
		guess1.style.backgroundColor = "yellow";
	}


	if ( letter2 == geheimeLetters[2] ) {
		guess2.style.backgroundColor = "red";
		goedeletters[2] = '!';
	} else if ( goedeletters.indexOf(letter2) > -1 ) {
		guess2.style.backgroundColor = "yellow";
	}

	if ( letter3 == geheimeLetters[3] ) {
		guess3.style.backgroundColor = "red";
		goedeletters[3] = '!';
	} else if ( goedeletters.indexOf(letter3) > -1 ) {
		guess3.style.backgroundColor = "yellow";
	}

	if ( letter4 == geheimeLetters[4] ) {
		guess4.style.backgroundColor = "red";
		goedeletters[4] = '!';
	} else if ( goedeletters.indexOf(letter4) > -1 ) {
		guess4.style.backgroundColor = "yellow";
	}

	// verhoog poging van 0 naar 1
	poging++;

	console.log(goedeletters);
	document.getElementById('letter0.' + poging).value = geheimwoord.charAt(0);

}

function Populate() {
	// get the HTML elements
	var woord = document.getElementById('woord.' + poging).value;

	document.getElementById('letter0.' + poging).value = woord.charAt(0);
	document.getElementById('letter1.' + poging).value = woord.charAt(1);
	document.getElementById('letter2.' + poging).value = woord.charAt(2);
	document.getElementById('letter3.' + poging).value = woord.charAt(3);
	document.getElementById('letter4.' + poging).value = woord.charAt(4);

}