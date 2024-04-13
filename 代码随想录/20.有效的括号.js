/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

/*
解题思路：
只分三种情况 1.左括号多了 2.右括号多了 3.括号不匹配
遇到左括号则栈中push对应的右括号
遇到右括号则pop栈顶元素，如果不匹配则返回false
*/

var isValid = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let x of s) {
    if (x in map) {
      stack.push(x);
      continue;
    }
    if (map[stack.pop()] !== x) return false;
  }
  return !stack.length;
};
// @lc code=end
