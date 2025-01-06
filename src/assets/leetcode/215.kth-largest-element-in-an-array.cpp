/*
 * @lc app=leetcode id=215 lang=cpp
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
class Solution
{
public:
    int findKthLargest(vector<int> &nums, int k)
    {
        std::priority_queue<int, std::vector<int>, std::greater<int>> min_heap(nums.begin(), nums.begin() + k);
        for (int i = k; i < nums.size(); ++i)
        {
            if (nums[i] > min_heap.top())
            {
                min_heap.pop();         // Remove the smallest element (root of the heap).
                min_heap.push(nums[i]); // Add the new element to the heap.
            }
        }
        return min_heap.top();
    }
};
// @lc code=end
