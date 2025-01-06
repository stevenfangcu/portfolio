/*
 * @lc app=leetcode id=645 lang=cpp
 *
 * [645] Set Mismatch
 */

// @lc code=start
class Solution
{
public:
    vector<int> findErrorNums(vector<int> &nums)
    {
        vector<int> res(2, 0);
        int n = nums.size();
        for (int i = 0; i < n; ++i)
        {
            int idx = abs(nums[i]) - 1; // Convert value to index
            if (nums[idx] < 0)
            {
                res[0] = idx + 1;
            }
            else
            {
                nums[idx] = -nums[idx];
            }
        }
        for (int j = 0; j < n; ++j)
        {
            if(nums[j] > 0) {
                res[1] = j + 1;
                break;
            }
        }
        return res;
    }
};
// @lc code=end
