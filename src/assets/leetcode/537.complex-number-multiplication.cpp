/*
 * @lc app=leetcode id=537 lang=cpp
 *
 * [537] Complex Number Multiplication
 */

// @lc code=start
class Solution {
public:
    string complexNumberMultiply(string num1, string num2) {
        int numsplit = num1.find('+');
        int num1left = std::stoi(num1.substr(0,numsplit));
        int num1right = std::stoi(num1.substr(numsplit + 1, num1.size() - numsplit - 2));

        numsplit = num2.find('+');
        int num2left = std::stoi(num2.substr(0, numsplit));
        int num2right = std::stoi(num2.substr(numsplit + 1, num2.size() - numsplit - 2));

        int i2 = (num1left * num2left) - (num1right * num2right);
        int numOfI = (num1left * num2right) + (num1right * num2left);
        return format("{}+{}i", i2, numOfI);
    }
};
// @lc code=end

