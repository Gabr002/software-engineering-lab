class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        vector<int> vt;

        for(int i = 0; i < m; i++) vt.push_back(nums1[i]); 
        for(int j = 0; j < n; j++) vt.push_back(nums2[j]); 

        sort(vt.begin(), vt.end());

        nums1.clear();

        for(auto& j : vt) nums1.push_back(j); 

        cout << endl;   
    }
};