import React, { useState } from "react";
import Board from "../Board";
import Status from "../Status";
import "./Game.css";
import { getCurrentMove, getWinner } from "../../utils";

const Game = () => {
  const [squares, setSquares] = useState(
    Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => null))
  );

  const handleClick = event => {
    const i = event.target.dataset.index_row;
    const j = event.target.dataset.index_col;
    if (squares[i][j] != null) {
      alert("You can only click on empty cells");
    } else {
      let new_squares = squares.slice();
      new_squares[i][j] = getCurrentMove(squares);
      setSquares(new_squares);
    }
  };

  return (
    <div className="game">
      <Status squares={squares} />
      <Board onClick={handleClick} squares={squares} />
    </div>
  );
};

export default Game;
