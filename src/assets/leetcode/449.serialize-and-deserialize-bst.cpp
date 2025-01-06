/*
 * @lc app=leetcode id=449 lang=cpp
 *
 * [449] Serialize and Deserialize BST
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Codec
{
public:
    // Encodes a tree to a single string.
    string serialize(TreeNode *root)
    {
        if (!root)
            return "";
        std::queue<TreeNode *> q;
        std::ostringstream oss;

        q.push(root);
        while (!q.empty())
        {
            TreeNode *node = q.front();
            q.pop();
            if (node)
            {
                oss << node->val << ",";
                q.push(node->left);
                q.push(node->right);
            }
            else
            {
                oss << "x,";
            }
        }
        std::string res = oss.str();
        if (!res.empty())
            res.pop_back();
        return res;
    }

    // Decodes your encoded data to tree.
    TreeNode *deserialize(string data)
    {
        if (data.empty())
            return nullptr;
        std::stringstream ss(data);
        std::string token;
        std::getline(ss, token, ',');
        TreeNode *root = new TreeNode(std::stoi(token));
        std::queue<TreeNode *> q;
        q.push(root);
        while (!q.empty() && std::getline(ss, token, ','))
        {
            TreeNode *node = q.front();
            q.pop();
            if (token != "x")
            {
                TreeNode *left = new TreeNode(std::stoi(token));
                node->left = left;
                q.push(left);
            }
            if (std::getline(ss, token, ','))
            {
                if (token != "x")
                {
                    TreeNode *right = new TreeNode(std::stoi(token));
                    node->right = right;
                    q.push(right);
                }
            }
        }
        return root;
    }
};

// Your Codec object will be instantiated and called as such:
// Codec* ser = new Codec();
// Codec* deser = new Codec();
// string tree = ser->serialize(root);
// TreeNode* ans = deser->deserialize(tree);
// return ans;
// @lc code=end
