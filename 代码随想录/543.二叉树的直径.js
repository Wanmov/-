/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  function depth(node) {
    if (node === null) return 0;
    let leftD = depth(node.left);
    let rightD = depth(node.right);
    diameter = Math.max(diameter, leftD + rightD);
    return Math.max(leftD, rightD) + 1;
  }
  depth(root);
  return diameter;
};
// @lc code=end
