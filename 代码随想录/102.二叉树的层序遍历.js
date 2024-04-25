/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let Queue = [];
  if (root) Queue.push(root); // 加入第一个节点
  let res = [];
  // 遍历
  while (Queue.length) {
    let size = Queue.length;
    let curLevel = []; //当前层数组
    while (size--) {
      let curNode = Queue.shift(); //出队
      curLevel.push(curNode.val); //当前层加入
      if (curNode.left) Queue.push(curNode.left); //左节点入队
      if (curNode.right) Queue.push(curNode.right); //右节点入队
    }
    res.push(curLevel); //结果加入
  }
  return res;
};
// @lc code=end
