/*
 * @lc app=leetcode id=63 lang=cpp
 *
 * [63] Unique Paths II
 */

// @lc code=start
class Solution
{
public:
    int width, height;

    int helpFunction(vector<vector<int>> &obstacleGrid, int x, int y, int dp[][101]) {
        if (x == width - 1 && y == height - 1) return 1;  // Base case: reached destination
        if (x >= width || y >= height || obstacleGrid[y][x] == 1) return 0;  // Bounds or obstacle check

        if (dp[x][y] != -1) return dp[x][y];  // Return cached result if already computed

        // Recursive calls
        int rightPaths = helpFunction(obstacleGrid, x + 1, y, dp);
        int downPaths = helpFunction(obstacleGrid, x, y + 1, dp);

        // Store result in dp and return it
        dp[x][y] = rightPaths + downPaths;
        return dp[x][y];
    }

    int uniquePathsWithObstacles(vector<vector<int>> &obstacleGrid) {
        // Edge cases for blocked start or end positions
        if (obstacleGrid[0][0] == 1) return 0;
        if (obstacleGrid.size() == 1 && obstacleGrid[0].size() == 1) return 1;
        if (obstacleGrid[obstacleGrid.size() - 1][obstacleGrid[0].size() - 1] == 1) return 0;

        width = obstacleGrid[0].size();
        height = obstacleGrid.size();
        int dp[101][101];
        memset(dp, -1, sizeof(dp));  // Initialize dp with -1

        return helpFunction(obstacleGrid, 0, 0, dp);
    }
};
// @lc code=end
