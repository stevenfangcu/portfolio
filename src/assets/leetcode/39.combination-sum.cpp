/*
 * @lc app=leetcode id=39 lang=cpp
 *
 * [39] Combination Sum
 */

// @lc code=start
class Solution {
public:
    void backtrack(std::vector<int>& candidates, int target, std::vector<int>& current, int start, std::vector<std::vector<int>>& result) {
        if (target == 0) {  // base case: when target is met
            result.push_back(current); // add current combination to result
            return;
        }
        for(int i = start; i < candidates.size(); i++ ) {
            if (candidates[i] > target) continue;
            if (i > start && candidates[i] == candidates[i - 1]) continue;
            current.push_back(candidates[i]);
            backtrack(candidates, target - candidates[i], current, i, result);
            current.pop_back();
        }
    }
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        std::sort(candidates.begin(), candidates.end()); // optional: sort to improve efficiency
        std::vector<std::vector<int>> result;
        std::vector<int> current;
        backtrack(candidates, target, current, 0, result); // call helper function
        return result;
    }
};
// @lc code=end

