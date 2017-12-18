const Game = function() {
  this.player = [];
  let player1 = new Player("Player 1","X");
  let player2 = new Player("Player 2","0");
  this.player.push(player1,player2);
  this.index = 0;
}

Game.prototype = {
  selectCurrentPlayer :function() {
    return this.player[this.index];
  },

  updatePlayerMove :function(move) {
    let player = this.selectCurrentPlayer();
    player.moves.push(move);
    this.updateIndex();
  },

  updateIndex :function() {
    this.index = 1 - this.index;
  },

  isMoveAlreadyMade :function(move) {
    let player1moves = this.player[0].moves;
    let player2moves = this.player[1].moves;
    let allmoves = player1moves.concat(player2moves);
    return allmoves.includes(move);
  },

  isDraw :function() {
    let player1moves = this.player[0].moves;
    let player2moves = this.player[1].moves;
    let allmoves = player1moves.concat(player2moves);
    return allmoves.length==9;
  },

  hasWon :function(currentPlayerMoves) {
    let winningMoves = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
    return winningMoves.some(function(winMoves) {
      return isSubset(currentPlayerMoves,winMoves);
    })
  }
}


const isSubset = function(superSet,subset){
  return subset.every(function(element){
    return superSet.includes(element);
  })
}
