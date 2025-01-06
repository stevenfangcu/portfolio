/*
 * @lc app=leetcode id=662 lang=cpp
 *
 * [662] Maximum Width of Binary Tree
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
    int widthOfBinaryTree(TreeNode *root)
    {
        if (root == nullptr)
            return 0;

        queue<pair<TreeNode *, long long>> q;
        q.push({root, 0});
        long long maxWidth = 0;

        while (!q.empty())
        {
            int levelSize = q.size();
            long long min = q.front().second; // Normalize the positions at each level
            long long first = 0, last = 0;
            for (int i = 0; i < levelSize; ++i)
            {
                auto current = q.front();
                TreeNode *node = current.first;
                long long position = current.second - min; // Normalize position
                q.pop();
                if (i == 0)
                    first = position; // First node position in the level
                if (i == levelSize - 1)
                    last = position; // Last node position in the level
                if (node->left)
                    q.push({node->left, 2 * position + 1}); // Left child position
                if (node->right)
                    q.push({node->right, 2 * position + 2}); // Right child position
            }
            maxWidth = max(maxWidth, last - first + 1); // Calculate the width for the current level
        }

        return maxWidth;
    }
};

// @lc code=end
