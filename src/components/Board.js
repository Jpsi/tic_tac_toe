import React from 'react';
import Square from './Square.js'

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {[0, 1, 2].map((x) => this.renderSquare(x))}
        </div>
        <div className="board-row">
          {[3, 4, 5].map((x) => this.renderSquare(x))}
        </div>
        <div className="board-row">
          {[6, 7, 8].map((x) => this.renderSquare(x))}
        </div>
      </div>
    );
  }
}

export default Board