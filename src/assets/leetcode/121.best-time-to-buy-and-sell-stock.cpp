/*
 * @lc app=leetcode id=121 lang=cpp
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
class Solution
{
public:
    int maxProfit(vector<int> &prices)
    {
        int min = INT_MAX, prof = 0;
        for (int price : prices)
        {
            if (price < min)
            {
                min = price;
            }
            else
            {
                prof = max(prof, price - min);
            }
        }
        return prof;
    }
};
// @lc code=end
