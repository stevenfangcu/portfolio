/*
 * @lc app=leetcode id=606 lang=cpp
 *
 * [606] Construct String from Binary Tree
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
    void func(TreeNode *root, std::string &res)
    {
        if (!root)
        {
            return;
        }
        res += '(';
        res += to_string(root->val);
        if (!root->left && root->right)
        {
            res += '(';
            res += ')';
        }
        func(root->left,res);
        func(root->right,res);
        res += ')';
    }
    string tree2str(TreeNode *root)
    {
        string res = "";
        res += to_string(root->val);
        if (!root->left && root->right)
        {
            res += '(';
            res += ')';
        }
        func(root->left, res);
        func(root->right, res);
        return res;
    }
};
// @lc code=end
