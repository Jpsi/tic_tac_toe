import { matrixContainsLine } from ".";

const matrix_with_line_1 = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
];

const matrix_with_line_2 = [
  [1, 1, 0],
  [0, 1, 0],
  [0, 1, 0]
];

const matrix_with_line_3 = [
  [1, 0, 0],
  [1, 1, 1],
  [0, 0, 0]
];

const matrix_with_line_4 = [
  [0, 1, 1],
  [0, 1, 0],
  [1, 0, 1]
];

const matrix_without_line_1 = [
  [0, 0, 0],
  [1, 1, 0],
  [0, 1, 1]
];

const matrix_without_line_2 = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 0, 1]
];

describe("matrixContainsLine", () => {
  it("should return true in correct cases", () => {
    expect(matrixContainsLine(matrix_with_line_1)).toBe(true);
    expect(matrixContainsLine(matrix_with_line_2)).toBe(true);
    expect(matrixContainsLine(matrix_with_line_3)).toBe(true);
    expect(matrixContainsLine(matrix_with_line_4)).toBe(true);
  });
});

describe("matrixContainsLine", () => {
  it("should return false in correct cases", () => {
    expect(matrixContainsLine(matrix_without_line_1)).toBe(false);
    expect(matrixContainsLine(matrix_without_line_2)).toBe(false);
  });
});
