/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let res = new ListNode(0),
        sum = 0,
        flag = 0,
        remainder = 0;

    while (l1 != null && l2 != null) {
        sum = l1.val + l2.val + flag

        if (sum >= 10) {
            flag = 1
            remainder = sum - 10
        } else {
            flag = 0
            remainder = sum
        }
        let add = new ListNode(remainder);
        res.next = add
        l1 = l1.next;
        l2 = l2.next
    }

    if (l1 != null && l2 != null) {
        
    }

    if (l1 != null) {
        res.next = l1
    }

    if (l2 != null) {
        res.next = l2
    }

    return res
};