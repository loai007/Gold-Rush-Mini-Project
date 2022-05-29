class GoldRush {
  constructor(rows, columns) {
    this.board = new Matrix(rows, columns);
    this.boardRows = rows - 1;
    this.boardColumns = columns - 1;
    this.player1Row = 0;
    this.player1Column = 0;
    this.player2Row = rows - 1;
    this.player2Column = columns - 1;
    this.player1Score = 0;
    this.player2Score = 0;
    this.generateCoins();
  }
  print() {
    this.board.print();
    console.log("player 1 Score : " + this.player1Score);
    console.log("player 2 Score : " + this.player2Score);
  }

  increaseScore(playerNumber, row, column) {
    if (this.board.matrix[row][column] === "c")
      if (playerNumber === 1) this.player1Score += 10;
      else this.player2Score += 10;
  }
  movePlayer1(direction) {
    switch (direction) {
      case "down":
        if (this.player1Row < this.boardRows) {
          this.board.matrix[this.player1Row][this.player1Column] = ".";
          this.player1Row += 1;
          this.increaseScore(1, this.player1Row, this.player1Column);
          this.board.matrix[this.player1Row][this.player1Column] = 1;
        }
        break;

      case "up":
        if (this.player1Row > 0) {
          this.board.matrix[this.player1Row][this.player1Column] = ".";
          this.player1Row -= 1;
          this.increaseScore(1, this.player1Row, this.player1Column);
          this.board.matrix[this.player1Row][this.player1Column] = 1;
        }
        break;
      case "left":
        if (this.player1Column > 0) {
          this.board.matrix[this.player1Row][this.player1Column] = ".";
          this.player1Column -= 1;
          this.increaseScore(1, this.player1Row, this.player1Column);
          this.board.matrix[this.player1Row][this.player1Column] = 1;
        }
        break;
      case "right":
        if (this.player1Column < this.boardColumns) {
          this.board.matrix[this.player1Row][this.player1Column] = ".";
          this.player1Column += 1;
          this.increaseScore(1, this.player1Row, this.player1Column);
          this.board.matrix[this.player1Row][this.player1Column] = 1;
        }
        break;
    }
  }

  movePlayer2(direction) {
    switch (direction) {
      case "down":
        if (this.player2Row < this.boardRows) {
          this.board.matrix[this.player2Row][this.player2Column] = ".";
          this.player2Row += 1;
          this.increaseScore(2, this.player2Row, this.player2Column);
          this.board.matrix[this.player2Row][this.player2Column] = 2;
        }
        break;

      case "up":
        if (this.player2Row > 0) {
          this.board.matrix[this.player2Row][this.player2Column] = ".";
          this.player2Row -= 1;
          this.increaseScore(2, this.player2Row, this.player2Column);
          this.board.matrix[this.player2Row][this.player2Column] = 2;
        }
        break;
      case "left":
        if (this.player2Column > 0) {
          this.board.matrix[this.player2Row][this.player2Column] = ".";
          this.player2Column -= 1;
          this.increaseScore(2, this.player2Row, this.player2Column);
          this.board.matrix[this.player2Row][this.player2Column] = 2;
        }
        break;
      case "right":
        if (this.player2Column < this.boardColumns) {
          this.board.matrix[this.player2Row][this.player2Column] = ".";
          this.player2Column += 1;
          this.increaseScore(2, this.player2Row, this.player2Column);
          this.board.matrix[this.player2Row][this.player2Column] = 2;
        }
        break;
    }
  }

  movePlayer(playerNumber, direction) {
    switch (playerNumber) {
      case 1:
        this.movePlayer1(direction);
        break;

      case 2:
        this.movePlayer2(direction);
        break;
    }
  }

  generateCoins() {
    const coinLimit = this.boardRows;
    for (let row = 0; row <= this.boardRows; row++) {
      for (let column = 0; column <= this.boardColumns; column++) {
        const isCoin = Math.floor(Math.random() * 25) > coinLimit;
        if (isCoin && typeof this.board.matrix[row][column] !== "number") {
          this.board.matrix[row][column] = "c";
        }
      }
    }
  }
}

// const game = new GoldRush(5, 5);
// game.print();
// game.movePlayer(1, "down");
// game.movePlayer(2, "up");
// game.print();
// game.movePlayer(1, "right");
// game.movePlayer(2, "left");
// game.print();
// game.movePlayer(1, "up");
// game.movePlayer(2, "down");
// game.print();
// game.movePlayer(1, "left");
// game.movePlayer(2, "right");
// game.print();
