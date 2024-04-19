/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let res = [];
  nums.sort((a, b) => a - b);
  let len = nums.length;
  for (let k = 0; k < len - 3; k++) {
    //剪枝，因为 target 可能为负，所以要对最小的 num[k] 进行判断，如果 num[k] > target 都 >0结束循环
    if (nums[k] > target && nums[k] > 0) break;
    //去重
    if (k > 0 && nums[k] === nums[k - 1]) continue;
    for (let i = k + 1; i < len - 2; i++) {
      let x = nums[i] + nums[k];
      //剪枝
      if (x > target && x > 0) break;
      // 去重
      if (i > k + 1 && nums[i] === nums[i - 1]) continue;
      let j = i + 1;
      let h = len - 1;
      while (j < h) {
        let s = nums[k] + nums[i] + nums[j] + nums[h];
        if (s > target) h--;
        else if (s < target) j++;
        else {
          res.push([nums[k], nums[i], nums[j], nums[h]]);
          for (j++; j < h && nums[j] === nums[j - 1]; j++);
          for (h--; h > j && nums[h] === nums[h + 1]; h--);
        }
      }
    }
  }
  return res;
};
// @lc code=end
