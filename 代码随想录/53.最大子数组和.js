/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] > 0) {
      nums[i] = nums[i] + nums[i - 1];
    }
  }
  return Math.max(...nums);
};
// @lc code=end
