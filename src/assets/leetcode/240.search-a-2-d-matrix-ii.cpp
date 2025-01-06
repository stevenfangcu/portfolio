/*
 * @lc app=leetcode id=240 lang=cpp
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
class Solution
{
public:
    bool searchMatrix(const vector<vector<int>> &matrix, int target)
    {
        if (matrix.empty() || matrix[0].empty())
        {
            return false; // Return false if the matrix is empty
        }

        int m = matrix.size();    // Number of rows
        int n = matrix[0].size(); // Number of columns

        int left = 0;
        int right = m * n - 1; // Total number of elements in the matrix

        while (left <= right)
        {
            int mid = left + (right - left) / 2;
            // Convert mid index to 2D matrix indices
            int midElement = matrix[mid / n][mid % n];

            if (midElement == target)
            {
                return true; // Target found
            }
            else if (midElement < target)
            {
                left = mid + 1; // Search the right half
            }
            else
            {
                right = mid - 1; // Search the left half
            }
        }

        return false; // Target not found
    }

    int main()
    {
        vector<vector<int>> matrix = {
            {1, 4, 7, 11},
            {2, 5, 8, 12},
            {3, 6, 9, 16},
            {10, 13, 14, 17}};

        int target = 5;

        if (searchMatrix(matrix, target))
        {
            cout << "Target found!" << endl;
        }
        else
        {
            cout << "Target not found!" << endl;
        }

        return 0;
    }
};
// @lc code=end
