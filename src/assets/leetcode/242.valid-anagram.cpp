/*
 * @lc app=leetcode id=242 lang=cpp
 *
 * [242] Valid Anagram
 */

// @lc code=start
class Solution
{
public:
    bool isAnagram(string s, string t)
    {
        std::unordered_map<char, int> dp;
        std::unordered_map<char, int> dp2;
        for (auto &x : s)
        {
            dp[x]++;
        }
        for (auto &y : t)
        {
            dp2[y]++;
        }
        return dp == dp2;
    }
};
// @lc code=end
