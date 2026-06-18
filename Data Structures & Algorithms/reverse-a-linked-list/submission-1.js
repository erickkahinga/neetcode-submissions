/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (!head) {
            return head
        }

        let tempArr = [head.val];
        let newHead = new ListNode("dummy");
        let curr = head;

        while (curr && curr.next) {
            curr = curr.next;
            tempArr.push(curr.val);
        }

        console.log("tempArr: " + tempArr);
        curr = newHead;

        for (let i = tempArr.length - 1; i >= 0; i--) {
            console.log("before: " + curr.val);
            console.log("tempArr value: " + tempArr[i])
            curr.next = new ListNode(tempArr[i]);
            curr = curr.next
            console.log("after: " + curr.val);
        }

        return newHead.next;
    }
}
