/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const dummy = new ListNode(0, head);
  let cur = dummy;

  while (cur.next && cur.next.next) {
    let temp1 = cur.next;
    let temp2 = cur.next.next.next;
    cur.next = cur.next.next;
    cur.next.next = temp1;
    temp1.next = temp2;
    cur = cur.next.next;
  }
  return dummy.next
};
// @lc code=end
