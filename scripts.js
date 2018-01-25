//Variables declaration start
var nameInput = document.getElementById('name-input');
var userNameText = document.getElementById('user-name');

var gameStartElement = document.getElementById('game-start');
var passage1Element = document.getElementById('passage-1');
var passage2Element = document.getElementById('passage-2');


var playerName = '';

//start Game function, when the user press the button
function startGame() {
  playerName = nameInput.value;

  if (playerName != '') {
    //test if the user has insert a name
    passage1Function();

  } else {
    //otherwise, update error message and toggle modal box
    errorMessage('Please Insert your name');
  }
}

function passage1Function() {
  userNameText.innerHTML = playerName; //replace user name inside span on passage1
  gameStartElement.hidden = true; //make gameStartElement invisible
  passage1Element.hidden = false; //make passage1Element visible
}

function passage2Function() {
  passage1Element.hidden = true; //make passage1Element invisible
  passage2Element.hidden = false; //make passage2Element visible

}

//function to process options clicks, it checks the id name
function clickFunction(id) {
  if (id == 'option-1') {
    //test if id == option-1
    passage2Function();
  } else if (id == 'option-2') {
    //test if id == option-2

  } else if (id == '') {

  }
}


function errorMessage(message) {
  //generic funciton to show modal with error message
  document.getElementById('error-msg').innerHTML = message; //replace innerHTML with message
  $('#error-msg-box').modal('show');
}
