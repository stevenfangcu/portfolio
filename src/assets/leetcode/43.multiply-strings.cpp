/*
 * @lc app=leetcode id=43 lang=cpp
 *
 * [43] Multiply Strings
 */

// @lc code=start
class Solution {
public:
    /*
        123
        456
    */
    string multiply(string num1, string num2) {
        if (num1 == "0" || num2 == "0") return "0";
        int m = num1.size();
        int n = num2.size();
        std::vector<int> result(m + n, 0); // Result can have at most m + n digits
            // Multiply each digit of num1 by each digit of num2
        for (int i = m - 1; i >= 0; i--) {
            for (int j = n - 1; j >= 0; j--) {
                int mul = (num1[i] - '0') * (num2[j] - '0');  // Multiply the digits
                int sum = mul + result[i + j + 1];  // Add to the existing value at the position
                result[i + j + 1] = sum % 10;  // Store the unit digit at the position
                result[i + j] += sum / 10;     // Carry over the tens digit to the next position
            }
        }

        // Convert the result array to a string, skipping leading zeros
        std::string resultStr;
        for (int num : result) {
            if (!(resultStr.empty() && num == 0)) {  // Skip leading zeros
                resultStr.push_back(num + '0');
            }
        }

        return resultStr.empty() ? "0" : resultStr;  // Handle edge case for "0"
    }
};
// @lc code=end

