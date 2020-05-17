//  Leet CODE 21. Merge Two Sorted Lists 
// EASY

// https://leetcode.com/problems/merge-two-sorted-lists/


// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */



const mergeTwoLists = (l1, l2) => {
    const result = new ListNode();
    let current = result;
  
    while (l1 !== null || l2 !== null) {
      if (l1 === null) {
        current.next = l2;
        l2 = l2.next;
      } else if (l2 === null) {
        current.next = l1;
        l1 = l1.next;
      } else if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }
  
    return result.next;
  };


// We are just creating an empty list
// and assigning it the value of l1 or l2 depending on which is smaller 
// we are just assiging our return value the entire list (l1 or l2)
// we return result.next instead of result because we didn't give result a value and our loop starts with our .next being assigned either l1 or l2