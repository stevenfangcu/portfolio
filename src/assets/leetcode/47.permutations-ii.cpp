/*
 * @lc app=leetcode id=47 lang=cpp
 *
 * [47] Permutations II
 */

// @lc code=start
class Solution {
public:
    void permutations(std::vector<int> &nums, int start, vector<std::vector<int>> &results)
    {
        if (start >= nums.size())
        {
            if(find(results.begin() , results.end() , nums) == results.end()){
                results.push_back(nums);
            }
            return;
        }
        for (int i = start; i < nums.size(); ++i)
        {
            std::swap(nums[start], nums[i]);        // Swap to generate a new permutation
            permutations(nums, start + 1, results); // Recurse for the next position
            std::swap(nums[start], nums[i]);        // Backtrack to restore the array
        }
    }
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        std::vector<std::vector<int>> result;
        permutations(nums, 0, result);
        return result;
    }
};
// @lc code=end

