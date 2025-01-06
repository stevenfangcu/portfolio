/*
 * @lc app=leetcode id=508 lang=cpp
 *
 * [508] Most Frequent Subtree Sum
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution
{
public:
    vector<int> findFrequentTreeSum(TreeNode *root)
    {
        if (!root) return {};
        std::unordered_map<int, int> hmap;
        int highestFreq = 0;

        function<int(TreeNode *)> dfs = [&](TreeNode *node) -> int
        {
            if (!node)
                return 0;
            int leftsum = dfs(node->left);
            int rightsum = dfs(node->right);

            int sum = node->val + leftsum + rightsum;
            hmap[sum]++;
            highestFreq = max(highestFreq, hmap[sum]);
            return sum;
        };
        dfs(root);
        vector<int> result;
        for (const auto &entry : hmap)
        {
            if (entry.second == highestFreq)
            {
                result.push_back(entry.first);
            }
        }

        return result;
    }
};
// @lc code=end
