/*
 * @lc app=leetcode id=238 lang=cpp
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        std::vector<int> res(n,1);
        int left = 1;
        for(int i = 0; i < nums.size(); ++i)
        {
            res[i] = left;
            left *= nums[i];
        }
        int right = 1;
        for(int i = n - 1; i >= 0; --i)
        {
            res[i] *= right;
            right *= nums[i];
        }
        return res;
    }
};
// @lc code=end

