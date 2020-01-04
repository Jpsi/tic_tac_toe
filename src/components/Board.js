import React from 'react';
import Square from './Square.js'

export default function Board() {
  const status = 'Next player: X';

  return (
    <div>
      <div className="status">{status}</div>
      {[[0,1,2], [3,4,5], [6,7,8]].map((a, index_row) =>
        <div className="board-row" key={index_row}>
          {a.map((x, index_col) => <Square key={index_col} value={x}/>)}
        </div>
      )}
    </div>
  );
}
