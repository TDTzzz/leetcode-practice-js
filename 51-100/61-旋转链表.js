/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || head.next == null) return head;

    phead = head;
    count = 1;
    while (phead.next != null) {
        count++;
        phead = phead.next;
    }

    var index = k % count;

    //移动index个位置    
    for (let i = 0; i < index; i++) {
        var prev = head;
        var start = prev.next;

        while (start.next != null) {
            prev = prev.next;
            start = start.next;
        }
        start.next = head;
        prev.next = null;
        head = start;
    }
    
    return head;
};