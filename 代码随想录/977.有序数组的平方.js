/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 * 双指针方法
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let res = [];
  let k = nums.length - 1;
  for (let i = 0, j = nums.length - 1; i <= j; ) {
    if (nums[i] * nums[i] > nums[j] * nums[j]) {
      res[k--] = nums[i] * nums[i];
      i++;
    } else {
      res[k--] = nums[j] * nums[j];
      j--;
    }
  }
  return res
};
// @lc code=end
