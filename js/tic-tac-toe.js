// display te start message
function startGame() {
    document.turn = 'X'; //set property turn for storing which player's turn it is
    setMessage(document.turn + " gets to start.");
}

//display message 
function setMessage(msg) {
    document.getElementById("message").innerHTML = msg;
}

//make the next move
function nextMove(square) {
    square.innerHTML = document.turn;
    switchTurn();
}

//switch turns of players
function switchTurn() {
    if (document.turn == 'X') {
        document.turn = 'O';
    }
    else {
        document.turn = 'X';
    }
    setMessage(document.turn + " plays now!");
}