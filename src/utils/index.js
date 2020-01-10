const getCurrentMove = squares => {
  let count_null = squares.reduce(
    (a, x) => a + x.filter(x => x === null).length,
    0
  );
  return "XO"[(count_null + 1) % 2];
};

const getWinner = squares => {
  const squares_x = squares.map(row => row.map(s => (s === "X" ? 1 : 0)));
  const squares_o = squares.map(row => row.map(s => (s === "O" ? 1 : 0)));
  let winner = "-";
  if (matrixContainsLine(squares_x)) {
    winner = "X";
  } else if (matrixContainsLine(squares_o)) {
    winner = "O";
  }
  return winner;
};

const matrixContainsLine = matrix => {
  const horizontal = matrix.map(row => row.reduce((a, s) => a + s, 0));
  const vertical = matrix.reduce((acc, row) => acc.map((x, i) => x + row[i]), [
    0,
    0,
    0
  ]);
  const diagonal1 = matrix[0][0] + matrix[1][1] + matrix[2][2];
  const diagonal2 = matrix[0][2] + matrix[1][1] + matrix[2][0];
  let winner = false;
  if (
    horizontal[0] === 3 ||
    horizontal[1] === 3 ||
    horizontal[2] === 3 ||
    vertical[0] === 3 ||
    vertical[1] === 3 ||
    vertical[2] === 3 ||
    diagonal1 === 3 ||
    diagonal2 === 3
  ) {
    winner = true;
  }
  return winner;
};

export { getCurrentMove, getWinner, matrixContainsLine};
