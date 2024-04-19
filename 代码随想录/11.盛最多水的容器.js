/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let area = 0;
  let len = height.length;
  let left = 0;
  let right = len - 1;
  while (left < right) {
    let h = Math.min(height[left], height[right]);
    area = Math.max(area, h * (right - left));
    if (height[left] < height[right]) left++;
    else right--;
  }
  return area;
};
// @lc code=end
