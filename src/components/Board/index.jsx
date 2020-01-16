import React from "react";
import Square from "../Square";
import "./Board.css";

const Board = props => {
  return (
    <div className="board">
      {props.squares.map((a, index_row) => (
        <div className="board-row" key={index_row.toString()}>
          {a.map((x, index_col) => (
            <Square
              key={index_row.toString() + index_col.toString()}
              index_row={index_row}
              index_col={index_col}
              value={props.squares[index_row][index_col]}
              onClick={props.onClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
