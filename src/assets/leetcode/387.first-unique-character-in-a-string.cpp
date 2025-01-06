/*
 * @lc app=leetcode id=387 lang=cpp
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
class Solution
{
public:
    int firstUniqChar(string s)
    {
        int dp[26] = {0};
        for (auto c : s)
            dp[c - 'a']++;
        set<char> st;
        for (int i = 0; i < 26; i++)
        {
            if (dp[i] == 1)
                st.insert(i + 'a');
        }
        int ret = -1;
        for (auto c : s) {
            ret++;
            if (st.count(c) != 0) return ret;
        }
        return -1;
    }
};
// @lc code=end
