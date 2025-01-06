/*
 * @lc app=leetcode id=167 lang=cpp
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
class Solution
{
public:
    vector<int> twoSum(vector<int> &numbers, int target)
    {
        int left = 0;
        int right = numbers.size() - 1;
        while (left < right)
        {
            int sum = numbers[left] + numbers[right];
            if (sum == target)
            {
                return {left + 1, right + 1};
            }
            else if (target > sum)
            {
                ++left;
            }
            else
            {
                --right;
            }
        }
        return {};
    }
};
/*
std::vector<int> res;
        int n = numbers.size();
        int middleVal = numbers[n / 2];
        for (int i = 0; i < n; ++i)
        {
            int val = target - numbers[i];
            int start = val > middleVal ? n / 2 : 0;
            int end = val > middleVal ? n : n / 2;
            for (int j = start; j < end; ++j)
            {
                if (numbers[j] == val)
                {
                    res.push_back(i+1);
                    res.push_back(j+1);
                    return res;
                }
                if (numbers[j] > val)
                {
                    break;
                }
            }
        }
        return res;
*/
// @lc code=end
