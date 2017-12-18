let tictactoe = new Game();

const updateMoveOnDisplay = function(cellId,playerSymbol) {
  let cell = document.getElementById(cellId);
  cell.innerText = playerSymbol;
}

const displayWinner = function(winner) {
  let winnerName = winner.name;
  let resultDisplay = document.getElementById("whoWon");
  resultDisplay.innerText = winnerName + " Won";
}

const displayDraw = function() {
  let resultDisplay = document.getElementById("whoWon");
  resultDisplay.innerText = "Match Draw";
}

const showTurn = function() {
  let playerName = tictactoe.selectCurrentPlayer().name;
  let resultDisplay = document.getElementById("whoWon");
  resultDisplay.innerText = playerName+ " turn";
}

const stopGame=function() {
  let table=document.getElementById("tic-tac-toe");
  table.onclick = null;
}

const decideAndDisplayResult = function(currentPlayer) {
  if (tictactoe.hasWon(currentPlayer.moves)) {
    displayWinner(currentPlayer);
    stopGame();
  } else if (tictactoe.isDraw()) {
    displayDraw();
    stopGame();
  }else {
    showTurn();
  }
}


const executeGame = function() {
  let cellId = event.target.id;
  let currentPlayer = tictactoe.selectCurrentPlayer();
  if (tictactoe.isMoveAlreadyMade(+cellId)) {
    return;
  }
  updateMoveOnDisplay(cellId,currentPlayer.symbol);
  tictactoe.updatePlayerMove(+cellId);
  decideAndDisplayResult(currentPlayer);
}


//window.onload=executeGame;
