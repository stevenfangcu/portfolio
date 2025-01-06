/*
 * @lc app=leetcode id=553 lang=cpp
 *
 * [553] Optimal Division
 */

// @lc code=start
class Solution
{
public:
    string optimalDivision(vector<int> &nums)
    {
        if (nums.size() == 1)
            return to_string(nums[0]);
        if (nums.size() == 2)
            return to_string(nums[0]) + '/' + to_string(nums[1]);
        std::string res = "";
        res += to_string(nums[0]) + "/(";
        for (int i = 1; i < nums.size() - 1; ++i)
        {
            res += to_string(nums[i]) + "/";
        }
        res += to_string(nums.back()) + ')';
        return res;
    }
};
// @lc code=end
