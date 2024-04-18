/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  let len = nums.length;
  for (let i = 0; i < nums.length - 2; i++) {
    let x = nums[i];
    if (nums[i] > 0) break;
    if (i > 0 && x === nums[i - 1]) continue;
    if (x + nums[len - 1] + nums[len - 2] < 0) continue;
    let j = i + 1;
    let k = len - 1;
    while (j < k) {
      let s = x + nums[j] + nums[k];
      if (s > 0) k--;
      else if (s < 0) j++;
      else {
        res.push([x, nums[j], nums[k]]);
        for (j++; j < k && nums[j] === nums[j - 1]; j++);
        for (k--; k > j && nums[k] === nums[k + 1]; k--);
      }
    }
  }
  return res;
};
// @lc code=end
