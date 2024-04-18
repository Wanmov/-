/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const len = s.length;
  for (let i = 0, j = len - 1; i < Math.floor(len / 2); i++, j--) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
  return s;
};
// @lc code=end
