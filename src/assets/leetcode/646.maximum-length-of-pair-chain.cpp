/*
 * @lc app=leetcode id=646 lang=cpp
 *
 * [646] Maximum Length of Pair Chain
 */

// @lc code=start
class Solution
{
public:
    static bool customCompare(const vector<int> &a, const vector<int> &b)
    {
        if(a[1] == b[1]) {
            return a[0] < b[0];
        }
        return a[1] < b[1];
    }
    int findLongestChain(vector<vector<int>> &pairs)
    {
        // name of memset, default value, size
        sort(pairs.begin(), pairs.end() ,customCompare);
        int count = 0;
        int currentEnd = INT_MIN;
         for (const auto& pair : pairs) {
            if (pair[0] > currentEnd) { // Can form a chain
                currentEnd = pair[1];
                count++;
            }
        }
        return count;
    }
};
// @lc code=end
