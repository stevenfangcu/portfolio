/*
 * @lc app=leetcode id=380 lang=cpp
 *
 * [380] Insert Delete GetRandom O(1)
 */

// @lc code=start
class RandomizedSet
{
private:
    std::vector<int> elements;            // Stores the elements
    std::unordered_map<int, int> indices; // Maps value to its index in 'elements'
public:
    RandomizedSet()
    {
    }

    bool insert(int val)
    {
        if (indices.count(val))
        {
            return false;
        }
        elements.push_back(val);
        indices[val] = elements.size() - 1;
        return true;
    }

    bool remove(int val)
    {
        if (!indices.count(val))
        {
            return false;
        }
        int index = indices[val];
        int last = elements.back();
        elements[index] = last;
        indices[last] = index;
        elements.pop_back();
        indices.erase(val);
        return true;
    }

    int getRandom()
    {
        int randomIndex = rand() % elements.size(); // Generate a random index
        return elements[randomIndex];               // Return the element at that index
    }
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet* obj = new RandomizedSet();
 * bool param_1 = obj->insert(val);
 * bool param_2 = obj->remove(val);
 * int param_3 = obj->getRandom();
 */
// @lc code=end
