/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let pre = null;
  function isOrder(node) {
    if (!node) return true;
    let left = isOrder(node.left);
    if (pre !== null && pre >= node.val) return false;
    else pre = node.val;
    let right = isOrder(node.right);
    return left && right;
  }
  return isOrder(root);
};
// @lc code=end
