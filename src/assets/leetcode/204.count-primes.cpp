/*
 * @lc app=leetcode id=204 lang=cpp
 *
 * [204] Count Primes
 */

// @lc code=start
class Solution
{
public:
    int countPrimes(int n)
    {
        if (n <= 2)
            return 0; // No primes less than 2
        std::vector<bool> isPrime(n, true);
        isPrime[0] = isPrime[1] = false; // 0 and 1 are not primes
        for (int i = 2; i * i < n; i++)
        {
            
        }
    }
};
// @lc code=end
