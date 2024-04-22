/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let m = matrix.length,
    n = matrix[0].length;
  let flagCol0 = false,
    flagRow0 = false;
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) flagCol0 = true;
  }
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) flagRow0 = true;
  }

  // 有零把对应的一行一列置为0
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (flagCol0) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
  if (flagRow0) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }
};
// @lc code=end
