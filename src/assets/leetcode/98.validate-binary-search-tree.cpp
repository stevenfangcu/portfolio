/*
 * @lc app=leetcode id=98 lang=cpp
 *
 * [98] Validate Binary Search Tree
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
private:
    bool val(TreeNode *node, TreeNode *min, TreeNode *max)
    {
        if (!node)
            return true;
        if ((min && node->val <= min->val) ||
            (max && node->val >= max->val))
        {
            return false;
        }
        return val(node->left, min, node) &&
               val(node->right, node, max);
    }

public:
    bool isValidBST(TreeNode *root)
    {
        if (!root)
            return true;
        return val(root, nullptr, nullptr);
        /*
        std::queue<TreeNode *> q;
        q.push(root);
        while (!q.empty())
        {
            TreeNode *node = q.front();
            q.pop();
            if (node->right)
            {
                if (node->val > node->right->val || node->val == node->right->val)
                    return false;
                q.push(node->right);
            }
            if (node->left)
            {
                if (node->val < node->left->val || node->val == node->left->val)
                    return false;
                q.push(node->left);
            }
        }
        return true;
        */
    }
};
// @lc code=end
