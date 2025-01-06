/*
 * @lc app=leetcode id=414 lang=cpp
 *
 * [414] Third Maximum Number
 */

// @lc code=start
class Solution
{
public:
    int thirdMax(vector<int> &nums)
    {
        long first = LLONG_MIN, second = LLONG_MIN, third = LLONG_MIN;
        // Iterate over the array
        for (int num : nums)
        {
            // Skip duplicates
            if (num == first || num == second || num == third)
                continue;

            // Update the top three max values
            if (num > first)
            {
                third = second;
                second = first;
                first = num;
            }
            else if (num > second)
            {
                third = second;
                second = num;
            }
            else if (num > third)
            {
                third = num;
            }
        }

        // If the third maximum doesn't exist, return the largest number
        return (third == LLONG_MIN) ? first : third;
    }
};
// @lc code=end
