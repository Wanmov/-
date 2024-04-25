/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function bundleTree(arr, left, right) {
    if (left > right) return null;
    let min = left + Math.floor((right - left) / 2);
    let root = new TreeNode(arr[min]);
    root.left = bundleTree(arr, left, min - 1);
    root.right = bundleTree(arr, min + 1, right);
    return root;
  }
  return bundleTree(nums, 0, nums.length - 1);
};
// @lc code=end
