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

//哈希
var lengthOfLongestSubstring = function (s) {
  let hashMap = new Map();
  let longCount = 0;
  let len = s.length;
  for (let i = 0, j = 0; j < len; j++) {
    if (hashMap.has(s[j])) {
      i = Math.max(hashMap.get(s[j]) + 1, i);
    }
    hashMap.set(s[j], j);
    longCount = Math.max(longCount, j - i + 1);
  }
  return longCount;
};

// @lc code=end
