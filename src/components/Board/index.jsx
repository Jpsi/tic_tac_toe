import React, { useState } from 'react';
import Square from '../Square'
import './index.css'

const Board = () => {
  const [move, setMove] = useState('X');

  const [squares, setSquares] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]]);

  const handleClick = (i,j) => {
    if (squares[i][j] != null) {
      alert("You can only click on empty cells")
    } else {
      let new_squares = squares.slice()
      if (move === 'X') {
        new_squares[i][j] = 'X';
        setMove('O')
      } else {
        new_squares[i][j] = 'O';
        setMove('X')
      }
      setSquares(new_squares)
    }
  }

  return (
    <div>
      <div className="status">Next player: {move}</div>
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