/*
 * @lc app=leetcode id=73 lang=cpp
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
class Solution
{
public:
    void setZeroes(vector<vector<int>> &matrix)
    {
        std::vector<int> columns(matrix.size(), 1);
        std::vector<int> rows(matrix.empty() ? 0 : matrix[0].size(), 1);
        for (int i = 0; i < columns.size(); ++i)
        {
            for (int j = 0; j < rows.size(); ++j)
            {
                if (matrix[i][j] == 0)
                {
                    columns[i] = 0;
                    rows[j] = 0;
                }
            }
        }
        for (int i = 0; i < columns.size(); ++i)
        {
            for (int j = 0; j < rows.size(); ++j)
            {
                if (columns[i] == 0 || rows[j] == 0)
                {
                    matrix[i][j] = 0;
                }
            }
        }
    }
};
// @lc code=end
