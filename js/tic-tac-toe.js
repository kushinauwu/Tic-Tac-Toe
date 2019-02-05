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
    if (square.innerHTML == "") {
        square.innerHTML = document.turn;
        switchTurn();
    } else {
        setMessage("This square is already used!");
    }
}

//switch turns of players
function switchTurn() {
    if(checkForWinner(document.turn)) {
        setMessage(document.turn + " wins!");
    }
    else if (document.turn == 'X') {
        document.turn = 'O';
            setMessage(document.turn + " plays now!");

    } else {
        document.turn = 'X';
            setMessage(document.turn + " plays now!");

    }
}

//check for winner
function checkForWinner(move) {
    var result = false;
    if (checkRow(0, 1, 2, move) ||
        checkRow(3, 4, 5, move) ||
        checkRow(6, 7, 8, move) ||
        checkRow(0, 3, 6, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(0, 4, 8, move) ||
        checkRow(2, 4, 6, move)) {  //winning combinations are across, sideways and diagonally
        result = true;
    }
    return result;
}

//check row of 3 
function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;  //if a, b, c have the same letter, return true
    }
    return result;
}

//get the box id 
function getBox(number) {
    document.getElementById("s" + number).innerHTML;
}






















