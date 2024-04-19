/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

//暴力
var lengthOfLongestSubstring = function (s) {
  let longCount = 0;
  for (let i = 0; i < s.length; i++) {
    let curCount = 0;
    let hash = new Set();
    for (let j = i; j < s.length; j++) {
      if (hash.has(s[j])) break;
      else {
        hash.add(s[j]);
        curCount++;
      }
      longCount = Math.max(longCount, curCount);
    }
  }
  return longCount;
};

// @lc code=end
