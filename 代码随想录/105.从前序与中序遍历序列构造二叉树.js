/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;
  let rootVal = preorder[0];
  let root = new TreeNode(rootVal);
  let rootIndex = inorder.indexOf(rootVal);

  root.left = buildTree(
    preorder.slice(1, rootIndex + 1),
    inorder.slice(0, rootIndex)
  );
  root.right = buildTree(
    preorder.slice(rootIndex + 1),
    inorder.slice(rootIndex + 1)
  );
  return root;
};

// 优化
var buildTree2 = function (preorder, inorder) {
  const indexMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    indexMap.set(inorder[i], i);
  }

  function arrayToTree(preStart, preEnd, inStart, inEnd) {
    if (preStart > preEnd || inStart > inEnd) return null;

    let rootVal = preorder[preStart];
    let root = new TreeNode(rootVal);

    let rootIndex = indexMap.get(rootVal);
    let leftSize = rootIndex - inStart;

    root.left = arrayToTree(
      preStart + 1,
      preStart + leftSize,
      inStart,
      inStart,
      rootIndex - 1
    );
    root.right = arrayToTree(
      preStart + leftSize + 1,
      preEnd,
      rootIndex + 1,
      inEnd
    );
  }
  return arrayToTree(0, preorder.length - 1, 0, inorder.length - 1);
};
// @lc code=end
