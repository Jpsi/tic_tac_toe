const getCurrentMove = (squares) => {
    let count_null = squares.reduce((a, x) => a + x.filter((x) => x===null).length, 0)
    return "XO"[(count_null+1)%2]
  }

export {getCurrentMove}