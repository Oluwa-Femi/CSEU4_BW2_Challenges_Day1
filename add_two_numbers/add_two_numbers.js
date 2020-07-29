/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const root = new ListNode()
    let current = root
    let carry = null
    while (l1 || l2) {
      current.next = l1 || l2 // when not to do this? we know that one of em is around so, its ok?
      current = current.next
      const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0)
      current.val = sum % 10
      carry = sum >= 10 ? Math.floor(sum / 10) : null
      l1 = l1 && l1.next
      l2 = l2 && l2.next
    }
    if (carry !== null) {
      current.next = new ListNode(carry)
    }
    return root.next
  };