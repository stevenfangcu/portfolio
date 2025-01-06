/*
 * @lc app=leetcode id=62 lang=cpp
 *
 * [62] Unique Paths
 */

// @lc code=start
class Solution {
public:
    int uniquePaths(int m, int n) {
    std::vector<std::vector<int>> dp(m, std::vector<int>(n, 0));
    // Initialize the first row and first column
    for (int i = 0; i < m; ++i) dp[i][0] = 1;
    for (int j = 0; j < n; ++j) dp[0][j] = 1;

    // Fill in the rest of the dp table
    for (int i = 1; i < m; ++i) {
        for (int j = 1; j < n; ++j) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

        return dp[m - 1][n - 1];
    }
};
// @lc code=end

