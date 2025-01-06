/*
 * @lc app=leetcode id=675 lang=cpp
 *
 * [675] Cut Off Trees for Golf Event
 */

// @lc code=start
class Solution
{
public:
    int bfs(const vector<vector<int>> &grid, int startX, int startY, int targetX, int targetY)
    {
        int rows = grid.size(), cols = grid[0].size(); // row and column size
        vector<vector<bool>> visited(rows, vector<bool>(cols, false));
        queue<pair<int, int>> q;
        q.push({0, 0});
        visited[0][0] = true;
        int steps = 0;
        return -1;
    }
    int cutOffTree(vector<vector<int>> &forest)
    {
        int rows = forest.size(), cols = forest[0].size();
        vector<pair<int, pair<int, int>>> trees;
        for (int i = 0; i < rows; ++i)
        {
            for (int j = 0; j < cols; ++j)
            {
                if (forest[i][j] > 1)
                { 
                    trees.push_back({forest[i][j], {i, j}});
                }
            }
        }

        // Sort trees by height
        sort(trees.begin(), trees.end());

        int totalSteps = 0;
        int startX = 0, startY = 0;
    }
};
// @lc code=end
