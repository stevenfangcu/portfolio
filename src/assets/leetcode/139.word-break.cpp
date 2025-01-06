/*
 * @lc app=leetcode id=139 lang=cpp
 *
 * [139] Word Break
 */

// @lc code=start
class Solution
{
public:
    bool wordBreak(string s, vector<string> &wordDict)
    {
        int n = s.length();
        vector<bool> track(n + 1, false);
        track[0] = true;
        for (int i = 0; i <= n; ++i)
        {
            for (const string &word : wordDict)
            {
                int start = i - word.length();
                if (start >= 0)
                {
                    if (track[start])
                    {
                        if (s.substr(start, word.length()) == word)
                        {
                            track[i] = true;
                            break;
                        }
                    }
                }
            }
        }
        return track[s.size()];
    }
};
// @lc code=end
