class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        set<int> s;

        sort(nums.begin(), nums.end());

        for(auto i : nums) s.insert(i);

        if(s.size() != nums.size()) return true;
        else return false;
    }
};
