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
var addTwoNumbers = function(l1, l2){
    var l3 = new ListNode(0),
        l3Next = l3,
        valSum, nextVal;
    while(l1 || l2) {
        valSum = l3Next.val;
        if (l1) {
            valSum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            valSum += l2.val;
            l2 = l2.next;
        }

        l3Next.val = valSum % 10;
        nextVal = (valSum > 9 ? 1 : 0);

        if (l1 || l2 || nextVal ) {
            l3Next.next = new ListNode(nextVal);
            l3Next = l3Next.next;
        }
    }
    return l3;
};