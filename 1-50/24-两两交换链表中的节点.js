/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let res = new ListNode(0)
    res.next = head;
    let pre = res

    while (pre.next != null && pre.next.next != null) {
        let node1 = pre.next
        let node2 = node1.next
        let lat = node2.next

        pre.next = node2
        node2.next = node1
        node1.next = lat

        pre = node1
    }

    return res;
};