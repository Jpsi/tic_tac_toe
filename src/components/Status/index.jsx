import React from "react";
import { getCurrentMove, getWinner } from "../../utils";
import "./Status.css";

const Status = props => {
  return (
    <div className="status">
      <div className="status-content">Next player: {getCurrentMove(props.squares)}</div>
      <div className="status-content">Winner: {getWinner(props.squares)}</div>
    </div>
  );
}

export default Status;