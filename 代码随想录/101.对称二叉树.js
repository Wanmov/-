/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  function compareNode(left, right) {
    if (
      (left === null && right !== null) ||
      (left !== null && right === null)
    ) {
      return false;
    } else if (left === null && right === null) {
      return true;
    } else if (left.val !== right.val) {
      return false;
    }
    // 单层逻辑，先比外面再比里面
    let outSide = compareNode(left.left, right.right);
    let inSide = compareNode(left.right, right.left);
    return outSide && inSide;
  }
  if (root === null) return true;
  return compareNode(root.left, root.right);
};
// @lc code=end
