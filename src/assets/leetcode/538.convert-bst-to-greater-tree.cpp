/*
 * @lc app=leetcode id=538 lang=cpp
 *
 * [538] Convert BST to Greater Tree
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
    int convert(TreeNode *node, int sum)
    {
        if (!node)
            return sum;
        node->val += convert(node->right, sum);
        return convert(node->left, node->val);
    }
    TreeNode *convertBST(TreeNode *root)
    {
        convert(root, 0);
        return root;
    }
};
// @lc code=end
