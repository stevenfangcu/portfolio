/*
 * @lc app=leetcode id=532 lang=cpp
 *
 * [532] K-diff Pairs in an Array
 */

// @lc code=start
class Solution {
public:
    int findPairs(vector<int>& nums, int k) {
        if (k < 0) return 0;
        std::unordered_map<int, int> frequencyMap;
        for(const int x: nums) 
        {
             frequencyMap[x]++;
        }
        int count = 0;
        for(const auto& [key, value]: frequencyMap)
        {
            if(k == 0) 
            {
                if(value > 1) 
                    count++;
            } else {
                if(frequencyMap.find(key + k) != frequencyMap.end()) 
                {
                    count++;
                }
            }
        }
        return count;
    }
};
// @lc code=end

