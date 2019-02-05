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
    if(checkWinner(document.turn)) {    //if checkWInner returns true
        setMessage(document.turn + " wins!");
    } else if (document.turn == 'X') {
        document.turn = 'O';
                setMessage(document.turn + " plays now!");


    } else {
        document.turn = 'X';
        setMessage(document.turn + " plays now!");

    }

}

function checkWinner(move) {
    var result = false;
    if(checkRow(1, 2, 3, move) || checkRow(4, 5, 6, move) || checkRow(7, 8, 9, move) || checkRow(1, 4, 7, move) || checkRow(2, 5, 8, move) || checkRow(3, 6, 9, move) || checkRow(1, 5, 9, move) || checkRow(3, 5, 7, move)) {
        var result = true;  //true if the 3 letters are the same across, sideways and diagonally

    }
    return result;
}

//check for rows with same letters
function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;  //check if a, b, c have same value
                makeGreen(a,b,c);   

    }
    return result;
}

//get id of the box the letter is in
function getBox(number) {
   return document.getElementById("s" + number).innerHTML;
}

function makeGreen(a, b, c) {
    document.getElementById("s" + a).style.backgroundColor = "lightgreen";
    document.getElementById("s" + b).style.backgroundColor = "lightgreen";
    document.getElementById("s" + c).style.backgroundColor = "lightgreen";
}






















