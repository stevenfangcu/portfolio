/*
 * @lc app=leetcode id=64 lang=cpp
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
class Solution {
public:

    int minPathSum(std::vector<std::vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int x = (j - 1 < 0) ? INT_MAX : grid[i][j-1];
                int y = (i - 1 < 0) ? INT_MAX : grid[i-1][j];
                if (x == y && y == INT_MAX) y = 0;
                grid[i][j] += min(x,y);
            }
        }
        return grid[m-1][n-1];
    }
};
// @lc code=end

