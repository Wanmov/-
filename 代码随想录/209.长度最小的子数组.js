/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 * 滑动窗口 (用一个 for 循环完成两个 for 循环的任务)
 * j 指向终止位置，当集合内元素的和大于目标元素就可以移动起始位置
 * 动态调整不同的区间
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let len = nums.length;
  if (len === 0) return 0;
  let ans = Infinity;
  let start = 0,
    end = 0;
  let sum = 0;
  while (end < len) {
    sum += nums[end];
    while (sum >= target) {
      ans = Math.min(ans, end - start + 1);
      //移动起始位置，并更新新区间内的值，去掉被移动掉的区间值
      sum -= nums[start];
      start++;
    }
    end++;
  }
  return ans === Infinity ? 0 : ans;
};
// @lc code=end
