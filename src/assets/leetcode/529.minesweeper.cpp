/*
 * @lc app=leetcode id=529 lang=cpp
 *
 * [529] Minesweeper
 */

// @lc code=start
class Solution
{
public:
    vector<vector<char>> updateBoard(vector<vector<char>> &board, vector<int> &click)
    {
        if (board.size() == 0 || board[0].size() == 0) {
            return { {'E'} };  
        }

        if (board[click[0]][click[1]] == 'M')
        {
            board[click[0]][click[1]] = 'X';
            return board;
        }
        int row = board.size(), col = board[0].size();

        int dx[] = {1, -1, 0, 0, 1, -1, 1, -1};
        int dy[] = {-1, 1, 1, -1, 1, -1, 0, 0};

        auto func = [&](int r, int c)
        {
            int count = 0;
            for (int i = 0; i < 8; ++i)
            {
                int newR = r + dx[i];
                int newC = c + dy[i];
                if (newR >= 0 && newR < row && newC >= 0 && newC < col)
                {
                    if (board[newR][newC] == 'M')
                    {
                        count++;
                    }
                }
            }
            return count;
        };
        std::queue<pair<int, int>> q;
        q.push({click[0], click[1]});
        while (!q.empty())
        {
            auto [x, y] = q.front();
            q.pop();

            int count = func(x, y);
            if (count > 0)
            {
                board[x][y] = count == 0 ? 'B' : '0' + count;
            }
            else
            {
                for (int i = 0; i < 8; i++)
                {
                    board[x][y] = 'B';  
                    int r = x + dx[i];
                    int c = y + dy[i];
                    if (r >= 0 && r < row && c >= 0 && c < col && board[r][c] == 'E')
                    {
                        board[r][c] = 'B'; 
                        q.push({r, c});
                    }
                }
            }
        }
        return board;
    }
};
// @lc code=end
