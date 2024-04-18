/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let _set = new Set();
  for (let n of nums) {
    _set.add(n);
  }
  let longStreak = 0;
  for (n of _set) {
    if (!_set.has(n - 1)) {
      let curNum = n;
      let curStreak = 1;
      while (_set.has(curNum + 1)) {
        curNum++;
        curStreak++;
      }
      longStreak = Math.max(longStreak, curStreak);
    }
  }
  return longStreak;
};
// @lc code=end
