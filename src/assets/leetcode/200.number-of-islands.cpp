/*
 * @lc app=leetcode id=200 lang=cpp
 *
 * [200] Number of Islands
 */

// @lc code=start
class Solution
{
public:
    void dfs(vector<vector<char>> &grid, int row, int col, int n, int m)
    {
        if (row < 0 || col < 0 || row >= n || col >= m || grid[row][col] != '1')
        {
            return;
        }
        grid[row][col] = '0';
        dfs(grid, row - 1, col, n, m); // up
        dfs(grid, row + 1, col, n, m); // down
        dfs(grid, row, col - 1, n, m); // left
        dfs(grid, row, col + 1, n, m); // right
        // check the 4 directions
    }
    int numIslands(vector<vector<char>> &grid)
    {
        if (grid.size() == 0 || grid[0].size() == 0)
            return 0;
        int res = 0, n = grid.size(), m = grid[0].size();
        for (int i = 0; i < n; ++i)
        {
            for (int j = 0; j < m; ++j)
            {
                if (grid[i][j] == '1')
                {
                    ++res;
                    dfs(grid, i, j, n, m);
                }
            }
        }
        return res;
    }
};
// @lc code=end
