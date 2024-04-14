/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */

/*
使用快慢指针
快指针先走 n+1 步
当快指针指向 null 时，慢指针就指向要删除节点的前一位
*/

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let fast = dummy;
  let slow = dummy;
  while (n--) fast = fast.next;
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};
// @lc code=end
