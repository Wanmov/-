/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function _reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

var rotate = function (nums, k) {
  let len = nums.length;
  k = k % len;
  _reverse(nums, 0, len - 1);
  _reverse(nums, 0, k - 1);
  _reverse(nums, k, len - 1);
  return nums;
};

// 双数组映射
// var rotate = function(nums, k) {
//     const n = nums.length;  
//     const newArr = new Array(n);
//     for (let i = 0; i < n; ++i) {
//         newArr[(i + k) % n] = nums[i];
//     }
//     for (let i = 0; i < n; ++i) {
//         nums[i] = newArr[i];
//     }
// }
// @lc code=end
