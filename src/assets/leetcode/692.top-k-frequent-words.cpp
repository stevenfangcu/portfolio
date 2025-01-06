/*
 * @lc app=leetcode id=692 lang=cpp
 *
 * [692] Top K Frequent Words
 */

// @lc code=start
class Solution
{
public:
    vector<string> topKFrequent(vector<string> &words, int k)
    {
        // Custom comparator: 
        // 1. Sort by frequency in descending order.
        // 2. If frequencies are equal, sort by word lexicographically in ascending order.
        auto cmp = [](const pair<int, string> &a, const pair<int, string> &b)
        {
            if (a.first == b.first)
            {
                return a.second < b.second; // Lexicographically smaller word first
            }
            return a.first > b.first; // Higher frequency first
        };

        // Step 1: Count frequency of each word
        std::unordered_map<std::string, int> frequencyMap;
        for (const string &word : words)
        {
            frequencyMap[word]++;
        }

        // Step 2: Store frequency and word pairs in a vector
        vector<pair<int, string>> ans;
        for (auto &ele : frequencyMap)
        {
            ans.push_back({ele.second, ele.first});
        }

        // Step 3: Sort the vector by frequency and lexicographical order
        sort(ans.begin(), ans.end(), cmp);

        // Step 4: Extract the top k frequent words
        vector<string> result;
        for (int i = 0; i < k; ++i)
        {
            result.push_back(ans[i].second); // Get the word (second part of the pair)
        }

        return result;
    }
};


// @lc code=end
