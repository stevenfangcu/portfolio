/*
 * @lc app=leetcode id=661 lang=cpp
 *
 * [661] Image Smoother
 */

// @lc code=start
class Solution
{
public:
    vector<vector<int>> imageSmoother(vector<vector<int>> &img)
    {
        int rows = img.size();
        int cols = img[0].size();
        vector<vector<int>> result(rows, vector<int>(cols, 0));

        int dx[] = {1, -1, 0, 0, 1, -1, 1, -1};
        int dy[] = {-1, 1, 1, -1, 1, -1, 0, 0};
        auto isValid = [&](int x, int y) -> bool
        {
            return (x >= 0 && x < rows && y >= 0 && y < cols);
        };
        for (int i = 0; i < rows; ++i)
        {
            for (int j = 0; j < cols; ++j)
            {
                int cnt = 1;
                int sum = img[i][j];
                for (int k = 0; k < 8; ++k)
                {
                    if (isValid(i + dx[k], j + dy[k]))
                    {
                        sum += img[i + dx[k]][j + dy[k]];
                        cnt++;
                    }
                }
                result[i][j] = sum / cnt;
            }
        }
        return result;
    }
};
// @lc code=end
