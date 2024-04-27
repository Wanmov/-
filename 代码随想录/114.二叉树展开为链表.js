/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let res = [];
  function preorderTraversal(node) {
    if (!node) return;
    res.push(node);
    preorderTraversal(node.left);
    preorderTraversal(node.right);
  }
  preorderTraversal(root);
  for (let i = 1; i < res.length; i++) {
    let pre = res[i - 1];
    let cur = res[i];
    pre.left = null;
    pre.right = cur;
  }
  return res;
};
// @lc code=end
