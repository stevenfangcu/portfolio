/*
 * @lc app=leetcode id=146 lang=cpp
 *
 * [146] LRU Cache
 */

// @lc code=start
class LRUCache
{
private:
    int max; // Maximum capacity of the cache
    std::vector<std::pair<int, int>> cache;
    int findKey(int k)
    {
        for (int i = 0; i < cache.size(); ++i)
        {
            if (cache[i].first == k)
            {
                return i;
            }
        }
        return -1;
    }

public:
    LRUCache(int capacity)
    {
        max = capacity;
    }

    int get(int key)
    {
        int index = findKey(key);
        if (index == -1)
            return -1;
        std::pair<int, int> res = cache[index];
        cache.erase(cache.begin() + index);
        cache.push_back(res);
        return res.second;
    }

    void put(int key, int value)
    {
        int index = findKey(key);
        if(index != -1)
        {
            cache.erase(cache.begin() + index);
        }
        else if(cache.size() == max)
        {
            cache.erase(cache.begin());
        }
        cache.push_back({key, value});
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache* obj = new LRUCache(capacity);
 * int param_1 = obj->get(key);
 * obj->put(key,value);
 */
// @lc code=end
