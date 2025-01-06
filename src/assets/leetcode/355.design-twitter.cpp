/*
 * @lc app=leetcode id=355 lang=cpp
 *
 * [355] Design Twitter
 */

// @lc code=start
class Twitter
{
public:
    int tweetCounter;
    std::unordered_map<int, std::unordered_set<int>> user_follow;
    unordered_map<int, vector<pair<int, int>>> user_posts;
    Twitter()
    {
        tweetCounter = 0;
    }

    void postTweet(int userId, int tweetId)
    {
    }

    vector<int> getNewsFeed(int userId)
    {
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> minHeap;
        for (auto &post : user_posts[userId])
        {
            minHeap.push(post);
            if (minHeap.size() > 10)
            {
                minHeap.pop();
            }
        }
    }

    void follow(int followerId, int followeeId)
    {
    }

    void unfollow(int followerId, int followeeId)
    {
    }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * Twitter* obj = new Twitter();
 * obj->postTweet(userId,tweetId);
 * vector<int> param_2 = obj->getNewsFeed(userId);
 * obj->follow(followerId,followeeId);
 * obj->unfollow(followerId,followeeId);
 */
// @lc code=end
