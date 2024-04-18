/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */

/**
 * 思路：将4个数组拆为两两相加，时间复杂度降低至 O(n^2)
 * a + b +c + d = 0  a + b = 0 - (c + d)
 * 出现的数与其出现的值存入哈希表
 * 找出符合上面等式的数,count+值
 */

var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let count = 0;
  const twoSumMap = new Map();
  for (let n1 of nums1) {
    for (let n2 of nums2) {
      let sum = n1 + n2;
      twoSumMap.set(sum, (twoSumMap.get(n1 + n2) || 0) + 1);
    }
  }
  for (let j1 of nums3) {
    for (let j2 of nums4) {
      let sum = j1 + j2;
      count += twoSumMap.get(-sum) || 0;
    }
  }
  return count;
};
// @lc code=end
