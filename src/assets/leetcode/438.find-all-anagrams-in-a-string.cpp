/*
 * @lc app=leetcode id=438 lang=cpp
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
class Solution
{
public:
    vector<int> findAnagrams(string s, string p)
    {
        std::vector<int> result;
        if (s.length() < p.length())
            return result;

        std::vector<int> targetFreq(26, 0), windowFreq(26, 0);

        // Build frequency array for p
        for (char c : p)
        {
            targetFreq[c - 'a']++;
        }

        int windowSize = p.length();

        // Initial window frequency
        for (int i = 0; i < windowSize; ++i)
        {
            windowFreq[s[i] - 'a']++;
        }

        // Check the first window
        if (windowFreq == targetFreq)
        {
            result.push_back(0);
        }

        // Slide the window across s
        for (int i = windowSize; i < s.length(); ++i)
        {
            // Add the new character to the window
            windowFreq[s[i] - 'a']++;
            // Remove the character that's sliding out
            windowFreq[s[i - windowSize] - 'a']--;

            // Compare current window with target
            if (windowFreq == targetFreq)
            {
                result.push_back(i - windowSize + 1);
            }
        }

        return result;
    }
};
// @lc code=end
