class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        set<int> unique_nums;
        for (int num : nums) {
            unique_nums.insert(num);
        }

        nums.clear();
        
        for(auto& nums_it : unique_nums) {
            nums.push_back(nums_it);
        } 
        
        return nums.size();         
    }
};