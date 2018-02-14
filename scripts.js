//custom selector
var getElement = (name) => document.querySelector(name);

var playerName = '';

//start Game function, when the user press the button
function startGame() {
  playerName = getElement('#name-input').value;
  // != is different?
  // == is equal?
  // < smaller
  // >
  if (playerName == '') {
    //otherwise, update error message and toggle modal box
    errorMessage('Please Insert your name');

  } else {

    //test if the user has insert a name
    passage1Function();
  }
}

function passage1Function() {
  getElement('#user-name').innerHTML = playerName; //replace user name inside span on passage1
  getElement('#game-start').hidden = true; //make getElement('#game-start') invisible
  getElement('#passage-1').hidden = false; //make getElement('#passage-1') visible
}

function passage2Function() {
  getElement('#passage-1').hidden = true; //make getElement('#passage-1') invisible
  getElement('#passage-2').hidden = false; //make getElement('#passage-2') visible

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
  getElement('#error-msg').innerHTML = message; //replace innerHTML with message
  $('#error-msg-box').modal('show');
}
