/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const idx = new Map();
  for (let str of strs) {
    let key = Array.from(str).sort().toString();
    idx.has(key) ? idx.get(key).push(str) : idx.set(key, [str]);
  }
  return [...idx.values()];
};
// @lc code=end
