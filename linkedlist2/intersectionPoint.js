/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function size(head){
    let temp = head;
    let sz =0;
    while(temp != null){
        sz++;
        temp = temp.next;
    }
    return sz;
}

var getIntersectionNode = function(headA, headB) {
    let szA = size(headA);
    let szB = size(headB);

    let tempA = headA;
    let  tempB = headB;

    while(szA != szB){
        if(szA > szB){//if szA > then move tempA forwards
            tempA = tempA.next;
            szA--;
        }else{
            tempB = tempB.next;
            szB--;
        }
    }

    while(tempA != tempB){
        tempA = tempA.next;
        tempB = tempB.next;
    }
    // if(tempA != null)console.log(tempA.val);
    return tempA;
};