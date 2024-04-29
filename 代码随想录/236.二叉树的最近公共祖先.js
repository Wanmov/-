/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  function dfs(node, p, q) {
    if (node === p || node === q || node === null) return node;
    let left = dfs(node.left, p, q);
    let right = dfs(node.right, p, q);
    if (left && right) return node;
    return left ? left : right;
  }
  return dfs(root, p, q);
};
// @lc code=end
