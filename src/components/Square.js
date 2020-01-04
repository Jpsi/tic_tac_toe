import React, { useState } from 'react';

export default function Square() {
  const [value, setValue] = useState(null);

  function changeValue() {
    if (value == null) {
      setValue("X");
    } else {
      setValue(null);
    }
  }

  return (
    <button className="square" onClick={changeValue}>
      {value}
    </button>
  );
}
