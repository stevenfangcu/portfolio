/*
 * @lc app=leetcode id=46 lang=cpp
 *
 * [46] Permutations
 */

// @lc code=start
class Solution
{
public:
    // [1,2,3]
    // how to do recursion here
    void permutations(std::vector<int> &nums, int start, vector<std::vector<int>> &results)
    {
        if (start == nums.size() - 1)
        {
            results.push_back(nums);
            return;
        }
        for (int i = start; i < nums.size(); ++i)
        {
            std::swap(nums[start], nums[i]);        // Swap to generate a new permutation
            permutations(nums, start + 1, results); // Recurse for the next position
            std::swap(nums[start], nums[i]);        // Backtrack to restore the array
        }
    }
    vector<vector<int>> permute(vector<int> &nums)
    {
        std::vector<std::vector<int>> result;
        permutations(nums, 0, result);
        return result;
    }
};
// @lc code=end
