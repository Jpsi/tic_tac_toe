import React, { useState } from "react";
import Square from "../Square";
import "./Board.css";
import { getCurrentMove, getWinner } from "../../utils";

const Board = () => {
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
    <div>
      <div className="status">Next player: {getCurrentMove(squares)}</div>
      <div className="status">Winner: {getWinner(squares)}</div>
      {squares.map((a, index_row) => (
        <div className="board-row" key={index_row.toString()}>
          {a.map((x, index_col) => (
            <Square
              key={index_row.toString() + index_col.toString()}
              index_row={index_row}
              index_col={index_col}
              value={squares[index_row][index_col]}
              onClick={handleClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
