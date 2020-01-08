import React from 'react';
import './index.css'

const Square = (props) => {
  return (
    <button className="square" data-index_row={props.index_row} data-index_col={props.index_col} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square