import React, { useState } from 'react';
import Square from './Square.js'

const Board = () => {
  const status = 'Next player: X';

  const [squares, setSquares] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]]);

  const handleClick = (i,j) => {
    let new_squares = squares.slice()
    new_squares[i][j] = 'X';
    setSquares(new_squares)
  }

  return (
    <div>
      <div className="status">{status}</div>
      {squares.map((a, index_row) =>
        <div className="board-row" key={index_row.toString()}>
          {a.map((x, index_col) => <Square
            key={index_row.toString() + index_col.toString()} 
            value={squares[index_row][index_col]}
            onClick={() => handleClick(index_row, index_col)}/>
          )}
        </div>
      )}
    </div>
  );
}

export default Board