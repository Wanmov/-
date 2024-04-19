/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function arraysEqual(arr1, arr2) {
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

var findAnagrams = function (s, p) {
  let len1 = s.length;
  let len2 = p.length;
  let res = [];
  if (len1 < len2) return [];
  let a1 = new Array(26).fill(0);
  let a2 = new Array(26).fill(0);
  for (let i = 0; i < len2; i++) {
    a2[p[i].charCodeAt() - "a".charCodeAt()]++;
  }
  for (let i = 0; i < len2 - 1; i++) {
    a1[s[i].charCodeAt() - "a".charCodeAt()]++;
  }
  for (let l = 0, r = len2 - 1; r < len1; l++, r++) {
    a1[s[r].charCodeAt() - "a".charCodeAt()]++;
    if (arraysEqual(a1, a2)) res.push(l);
    a1[s[l].charCodeAt() - "a".charCodeAt()]--;
  }
  return res;
};
// @lc code=end
