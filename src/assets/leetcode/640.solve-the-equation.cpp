/*
 * @lc app=leetcode id=640 lang=cpp
 *
 * [640] Solve the Equation
 */

// @lc code=start
class Solution
{
public:
    string solveEquation(string equation)
    {
        int x = 0;
        int sum = 0;
        int changeSides = 1;
        int pos = 1;       
        string str = "";
        for (int i = 0; i <= equation.length(); ++i)
        {
            if (i == equation.length() || equation[i] == '=' || equation[i] == '+' || equation[i] == '-')
            {
                if (!str.empty()) 
                {
                    if (str.back() == 'x')
                    {
                        str.pop_back();
                        int term = str.empty() ? 1 : std::stoi(str); 
                        x += term * changeSides * pos;
                    }
                    else // is a valid integer
                    {
                        int term = std::stoi(str); 
                        sum += term * changeSides * pos;
                    }
                }
                if (i == equation.length())
                    break;
                pos = (equation[i] == '-') ? -1 : 1;
                if (equation[i] == '=')
                {
                    changeSides = -1;
                    pos = 1;
                }
                str.clear();
            }
            else
            {
                str += equation[i];
            }
        }
        if (x == 0)
        {
            return (sum == 0) ? "Infinite solutions" : "No solution";
        }
        int xValue = -sum / x;
        return "x=" + std::to_string(xValue);
    }
};
// @lc code=end
