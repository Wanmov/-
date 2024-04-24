/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  function getDepth(node) {
    if (node === null) return 0;
    let leftHeight = getDepth(node.left);
    let rightHeight = getDepth(node.right);
    let depth = 1 + Math.max(leftHeight, rightHeight);
    return depth;
  }
  return getDepth(root);
};
// @lc code=end
