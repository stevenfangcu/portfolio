/*
 * @lc app=leetcode id=38 lang=cpp
 *
 * [38] Count and Say
 */

// @lc code=start
class Solution {
public:
    string getNext(string input) {
        int counter = 1;
        char dummyChar = input[0];
        std::string res = "";
        for(int i = 1; i < input.length(); i++) {
            if(dummyChar == input[i]) {
                counter++; 
            } else {
                res += std::to_string(counter) + dummyChar;
                dummyChar = input[i];
                counter = 1;
            }
        }
        res += std::to_string(counter) + dummyChar;
        return res;
    }
    string countAndSay(int n) {
        if(n == 1) return "1";
        else if(n == 2) return "11";
        std::string res = "11";
        for(int i = 2; i < n; i++ ) {
            res = getNext(res);
        }
        return res;
    }
};
// @lc code=end

