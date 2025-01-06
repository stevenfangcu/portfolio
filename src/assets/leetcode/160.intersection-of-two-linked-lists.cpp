/*
 * @lc app=leetcode id=160 lang=cpp
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        if(!headA || !headB) return nullptr;
        ListNode* dummyA = headA;
        ListNode* dummyB = headB;
        while(dummyA != dummyB)
        {
            dummyA = dummyA == nullptr ? headB : dummyA -> next;
            dummyB = dummyB == nullptr ? headA : dummyB -> next;
        }
        return dummyA;
    }
};
// @lc code=end

