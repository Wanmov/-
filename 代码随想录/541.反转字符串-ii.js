/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let arr = s.split("");
  for (let i = 0; i < s.length; i += 2 * k) {
    let left = i;
    let right = i + k - 1 >= s.length ? s.length - 1 : i + k - 1;
    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return arr.join("");
};
// @lc code=end
