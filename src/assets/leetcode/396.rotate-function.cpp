/*
 * @lc app=leetcode id=396 lang=cpp
 *
 * [396] Rotate Function
 */

// @lc code=start
class Solution
{
public:
    int maxRotateFunction(vector<int> &nums)
    {
        int n = nums.size();
        long sum = std::accumulate(nums.begin(), nums.end(), 0L);
        long f = 0;
        for (int i = 0; i < n; ++i)
        {
            f += i * nums[i];
        }
        long maxF = f;
        for (int k = 1; k < n; ++k)
        {
            f = f + sum - n * nums[n - k];
            maxF = std::max(maxF, f);
        }
        return maxF;
    }
};
// @lc code=end
