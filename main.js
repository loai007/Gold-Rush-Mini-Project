const GoldRushGame = new GoldRush(5, 5);
const render = new renderer(GoldRushGame.board.matrix, {
  player1Score: GoldRushGame.player1Score,
  player2Score: GoldRushGame.player2Score,
});

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      GoldRushGame.movePlayer(1, "up");
      break;
    case "s":
      GoldRushGame.movePlayer(1, "down");

      break;
    case "a":
      GoldRushGame.movePlayer(1, "left");

      break;
    case "d":
      GoldRushGame.movePlayer(1, "right");

      break;
    case "ArrowUp":
      GoldRushGame.movePlayer(2, "up");

      break;
    case "ArrowDown":
      GoldRushGame.movePlayer(2, "down");

      break;
    case "ArrowLeft":
      GoldRushGame.movePlayer(2, "left");

      break;
    case "ArrowRight":
      GoldRushGame.movePlayer(2, "right");
      break;

    default:
      break;
  }
  render.renderBoard(GoldRushGame.board.matrix, {
    player1Score: GoldRushGame.player1Score,
    player2Score: GoldRushGame.player2Score,
  });
});
