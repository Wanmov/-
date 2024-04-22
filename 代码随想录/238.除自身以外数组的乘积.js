/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let len = nums.length;
  let res = [];
  res[0] = 1;
  for (let i = 1; i < len; i++) {
    res[i] = nums[i - 1] * res[i - 1];
  }

  let R = 1;
  for (let i = len - 1; i >= 0; i--) {
    res[i] = res[i] * R;
    R = R * nums[i];
  }
  return res;
};
// @lc code=end
