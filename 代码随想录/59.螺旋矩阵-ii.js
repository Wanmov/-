/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 * 坚持循环不变量 左闭右开
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let startX = 0,
    startY = 0; // 起始位置
  let loop = Math.floor(n / 2); // 旋转圈数
  let mid = Math.floor(n / 2); // 中点
  let offset = 1; // 每层填充个数
  let count = 1; // 填充值
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0));
  while (loop--) {
    let i = startX,
      j = startY;
    // 上行从左到右
    for (; j < n - offset; j++) {
      res[i][j] = count++;
    }
    // 右列从上到下
    for (; i < n - offset; i++) {
      res[i][j] = count++;
    }
    // 底行从右到左
    for (; j > startY; j--) {
      res[i][j] = count++;
    }
    // 左列从下到上
    for (; i > startX; i--) {
      res[i][j] = count++;
    }
    startX++;
    startY++;

    offset += 1;
  }
  if (n % 2 === 1) {
    res[mid][mid] = count;
  }
  return res;
};
// @lc code=end
