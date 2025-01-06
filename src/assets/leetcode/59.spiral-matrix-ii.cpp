/*
 * @lc app=leetcode id=59 lang=cpp
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
class Solution {
public:
    vector<vector<int>> generateMatrix(int n) {
        std::vector<std::vector<int>> result(n, std::vector<int>(n, 0));
        int top = 0, bottom = n - 1;
        int left = 0, right = n - 1;
        for (int num = 1; num <= n * n;) {
            for (int i = left; i <= right; ++i) {
                result[top][i] = num;
                num++;
            }
            ++top;
            for (int i = top; i <= bottom; ++i) {
                result[i][right] = num;
                ++num;
            }
            --right;
            if (top <= bottom) {
                for (int i = right; i >= left; --i) {
                    result[bottom][i] = num;
                    ++num;
                }
                --bottom;
            }
            if (left <= right) {
                for (int i = bottom; i >= top; --i) {
                    result[i][left] = num;
                    ++num;
                }
                ++left;
            }
        }
        return result;
    }
};
// @lc code=end

