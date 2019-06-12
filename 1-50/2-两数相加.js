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
    var result = new ListNode(0);
    var head = result;
    var carry = 0;
    var remainder = 0;
    while (l1 != null && l2 != null) {
        var temp = l1.val + l2.val + (carry ? 1 : 0);
        if (temp >= 10) {
            carry = 1;
            remainder = temp % 10;
        } else {
            carry = 0;
            remainder = temp;
        }
        var add = new ListNode(remainder);
        result.next = add;
        result = result.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    if (l1 == null && l2 == null) {

    }
    if (l1 == null) {
        while (l2 != null) {
            if (carry) {
                var temp = l2.val + (carry ? 1 : 0);
                if (temp >= 10) {
                    carry = 1;
                    remainder = temp % 10;
                } else {
                    carry = 0;
                    remainder = temp;
                }
                var add = new ListNode(remainder);
                result.next = add;
                result = result.next;
                l2 = l2.next;
            } else {
                var add = new ListNode(l2.val);
                result.next = add;
                result = result.next;
                l2 = l2.next;
            }
        }
    } else {
        while (l1 != null) {
            if (carry) {
                var temp = l1.val + (carry ? 1 : 0);
                if (temp >= 10) {
                    carry = 1;
                    remainder = temp % 10;
                } else {
                    carry = 0;
                    remainder = temp;
                }
                var add = new ListNode(remainder);
                result.next = add;
                result = result.next;
                l1 = l1.next;
            } else {
                var add = new ListNode(l1.val);
                result.next = add;
                result = result.next;
                l1 = l1.next;
            }
        }
    }
    if (carry) {
        var add = new ListNode(1);
        result.next = add;
        result = result.next;
        carry = 0;
    }
    return head.next;
}