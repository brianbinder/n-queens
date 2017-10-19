/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

  // create a board(n)
  var board = new Board({n: n});

  var helper = function(row) {
    for (var j = 0; j < board.rows().length; j++) {
      board.togglePiece(row, j);
      if (!board.hasRowConflictAt(row) && !board.hasColConflictAt(j)) {
        if (row === n - 1) {
          return true;
        } else {
          return helper(row + 1);
        }
      }
      board.togglePiece(row, j);
    }
  };

  if (helper(0)) {
    console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
    return board.rows();
  }
  // call helperfunc(0) on row zero
  // toggle (0, 0) and check for conflicts
  // if there are conflicts -> untoggle (0, 0) and toggle (0, 1)
  // check that input is !== n -1
  //if input === n - 1 -> return
  //otherwise call helperfunc(input + 1)
  //return board

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme


  var board = new Board({n: n});
  var helper = function(row) {
    for (var j = 0; j < board.rows().length; j++) {
      board.togglePiece(row, j);
      if (!board.hasRowConflictAt(row) && !board.hasColConflictAt(j)) {
        if (row === n - 1) {
          solutionCount++;
        } else {
          helper(row + 1);
        }
      }
      board.togglePiece(row, j);
    }
  };
  helper(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // var solution = undefined; //fixme

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  // return solution;
  // var board = new Board({n: n});
  // var helper
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

