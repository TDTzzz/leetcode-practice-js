/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let first = head
    let two = head
    for (let i = 0; i < n; i++) {
        two = two.next
    }

    if(slow==null){

    }
    while (two.next != null) {
        first = first.next
        two = two.next
    }
    first.next = first.next.next
    return head
};