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
  let pre = 0;
  let max_num = nums[0];
  for (let x of nums) {
    pre = Math.max(pre + x, x);
    max_num = Math.max(max_num, pre);
  }
  return max_num;
};
// @lc code=end
