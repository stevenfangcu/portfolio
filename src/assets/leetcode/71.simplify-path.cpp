/*
 * @lc app=leetcode id=71 lang=cpp
 *
 * [71] Simplify Path
 */

// @lc code=start
class Solution {
public:
    string simplifyPath(string path) {
        stack<string> st;
        int i=0;
        while(i<path.size()){
            int start = i;
            int end = i+1;

            while(end<path.size() && path[end] != '/'){
                ++end;
            }
            i = end;

            string minPath = path.substr(start, end-start);

            if(minPath == "/" || minPath == "/.") continue;
            else if(minPath != "/..") st.push(minPath);
            else if(!st.empty()) st.pop();
        }

        string ans;
        while(!st.empty()){
            ans = st.top() + ans;
            st.pop();
        }
        return ans.empty() ? "/" : ans;
    }
};
// @lc code=end
